import fs from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import https from 'node:https';
import http from 'node:http';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const externalDir = path.join(publicDir, 'external');

const TARGET_URL = process.env.TARGET_URL || 'https://www.betbdt.vip/register?affiliateCode=soy001';

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function unique(arr) {
  return Array.from(new Set(arr.filter(Boolean)));
}

function absoluteUrl(url, base) {
  try {
    return new URL(url, base).href;
  } catch {
    return null;
  }
}

async function downloadFile(url, destPath) {
  const proto = url.startsWith('https:') ? https : http;
  await new Promise((resolve, reject) => {
    const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed ${res.statusCode} ${url}`));
        return;
      }
      const fileStream = createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', resolve);
      fileStream.on('error', reject);
    });
    req.on('error', reject);
  });
}

function sanitizeFilename(input, index) {
  const u = new URL(input);
  const base = path.basename(u.pathname).split('?')[0].split('#')[0] || `img_${index}`;
  return base.replace(/[^a-zA-Z0-9._-]/g, '_') || `img_${index}`;
}

async function main() {
  await ensureDir(externalDir);
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 120000 });

  // Attempt to scroll to load lazy assets
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let total = 0;
      const step = () => {
        window.scrollBy(0, window.innerHeight);
        total += window.innerHeight;
        if (total > document.body.scrollHeight * 1.5) return resolve();
        setTimeout(step, 300);
      };
      step();
    });
  });

  const origin = await page.evaluate(() => location.origin);

  const urls = await page.evaluate(() => {
    const out = [];
    // <img>
    Array.from(document.images).forEach(img => {
      if (img.currentSrc) out.push(img.currentSrc);
      if (img.src) out.push(img.src);
      const srcset = img.srcset || '';
      srcset.split(',').forEach(part => {
        const u = part.trim().split(' ')[0];
        if (u) out.push(u);
      });
    });
    // link rel icons
    document.querySelectorAll('link[rel~="icon" i], link[rel~="apple-touch-icon" i]').forEach(l => {
      if (l.href) out.push(l.href);
    });
    // meta og:image
    document.querySelectorAll('meta[property="og:image"], meta[name="og:image"]').forEach(m => {
      const c = m.getAttribute('content');
      if (c) out.push(c);
    });
    // background images in inline styles
    document.querySelectorAll('[style*="background"]').forEach(el => {
      const s = el.getAttribute('style') || '';
      const m = s.match(/url\(("|')?(.*?)("|')?\)/gi);
      if (m) m.forEach(u => out.push(u.replace(/url\(("|')?(.*?)("|')?\)/i, '$2')));
    });
    return out;
  });

  // Collect stylesheet URLs to parse background images too
  const stylesheetUrls = await page.evaluate(() =>
    Array.from(document.querySelectorAll('link[rel="stylesheet" i]'))
      .map(l => l.href)
      .filter(Boolean)
  );

  // Helper to download text files (like CSS)
  async function downloadText(url) {
    const proto = url.startsWith('https:') ? https : http;
    return await new Promise((resolve, reject) => {
      const req = proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          downloadText(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed ${res.statusCode} ${url}`));
          return;
        }
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      });
      req.on('error', reject);
    });
  }

  // Parse CSS url(...) references for additional assets
  const cssDir = path.join(externalDir, 'styles');
  await ensureDir(cssDir);
  const cssUrlsFound = [];
  for (let i = 0; i < stylesheetUrls.length; i++) {
    const sheetUrl = absoluteUrl(stylesheetUrls[i], origin);
    if (!sheetUrl) continue;
    try {
      const css = await downloadText(sheetUrl);
      const name = `style_${String(i).padStart(2, '0')}.css`;
      await fs.writeFile(path.join(cssDir, name), css, 'utf8');
      const matches = Array.from(css.matchAll(/url\(("|')?(.*?)("|')?\)/gi)).map(m => m[2]);
      matches.forEach(u => cssUrlsFound.push(absoluteUrl(u, sheetUrl)));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Skip CSS', sheetUrl, e.message);
    }
  }

  const abs = unique([
    ...urls.map(u => absoluteUrl(u, origin)),
    ...cssUrlsFound
  ]).filter(u => /\.(png|jpg|jpeg|webp|svg|gif|avif)(\?|#|$)/i.test(u || ''));

  const downloads = [];
  let idx = 0;
  for (const u of abs) {
    const name = sanitizeFilename(u, idx++);
    const dest = path.join(externalDir, name);
    try {
      await downloadFile(u, dest);
      const st = await fs.stat(dest);
      downloads.push({ url: u, file: `external/${name}`, bytes: st.size });
      // eslint-disable-next-line no-console
      console.log('Downloaded', u, '->', name, st.size);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Skip', u, e.message);
    }
  }

  await fs.writeFile(path.join(externalDir, 'downloads.json'), JSON.stringify(downloads, null, 2));

  // Snapshot page HTML for embedding (approximate look-only, no scripts)
  try {
    let html = await page.content();
    // Neutralize script tags to avoid execution inside our app
    html = html.replace(/<script(\s|>)/gi, '<script type="text/blocked"$1');
    await fs.writeFile(path.join(externalDir, 'page.html'), html, 'utf8');
  } catch (e) {
    console.warn('Snapshot page failed:', e.message);
  }

  // Simple selection logic
  const nonSvg = downloads.filter(d => !d.file.toLowerCase().endsWith('.svg'));
  const sorted = [...nonSvg].sort((a, b) => b.bytes - a.bytes);
  const biggest = sorted[0];
  const second = sorted[1] || biggest;

  // Prefer small non-svg for logo, fallback to svg smallest
  const smallest = nonSvg[nonSvg.length - 1] || downloads[downloads.length - 1];
  const logoCandidate = (downloads.find(d => /logo/i.test(d.file)) || smallest) || biggest;

  async function copyFromExternal(srcRel, destFile) {
    const src = path.join(publicDir, srcRel);
    const dest = path.join(publicDir, destFile);
    await fs.copyFile(src, dest);
  }

  // Map selections to our assets
  if (biggest) await copyFromExternal(biggest.file, '1.png');
  if (second) await copyFromExternal(second.file, '2.png');
  // Preserve existing LOGO.png (Gamebuzz). Only overwrite if explicitly requested.
  if (process.env.OVERWRITE_LOGO === '1' && logoCandidate) {
    await copyFromExternal(logoCandidate.file, 'LOGO.png');
  }

  // Replace commonly referenced icons if present
  if (second) {
    await copyFromExternal(second.file, '1.ico');
    await copyFromExternal(second.file, '2.ico');
  }

  // eslint-disable-next-line no-console
  console.log('Selections:', { biggest, second, logoCandidate });

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

