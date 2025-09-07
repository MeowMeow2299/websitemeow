import React, { useRef, useEffect } from 'react';

const ContentSnapshot = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const onLoad = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return;
      try {
        const style = doc.createElement('style');
        style.textContent = `
          /* Hide containers we don't want duplicated */
          header, nav, footer, aside { display: none !important; }
          [class*="header" i], [id*="header" i], [class*="navbar" i], [id*="navbar" i] { display: none !important; }
          [class*="footer" i], [id*="footer" i], [class*="sidebar" i], [id*="sidebar" i] { display: none !important; }
          [class*="cookie" i], [id*="cookie" i], [class*="consent" i], [id*="consent" i] { display: none !important; }
          [class*="chat" i], [id*="chat" i], [class*="float" i], [id*="float" i] { display: none !important; }
          [class*="back-to-top" i], [id*="back-to-top" i] { display: none !important; }

          /* Remove spacing from hidden header area */
          html, body { background: transparent !important; margin: 0 !important; padding: 0 !important; }
          body, #app, main, [role="main"] { margin-top: 0 !important; padding-top: 0 !important; }

          /* Keep content fluid */
          body * { max-width: 100% !important; }
        `;
        doc.head.appendChild(style);

        // Try to scroll to main content if there is residual top gap
        const mainLike = doc.querySelector('[role="main"], main, [id*="main" i], [class*="main" i]');
        if (mainLike && typeof iframe.contentWindow?.scrollTo === 'function') {
          const rect = mainLike.getBoundingClientRect();
          const top = Math.max(0, rect.top - 8);
          iframe.contentWindow.scrollTo({ top, behavior: 'auto' });
        }
      } catch {
        // ignore
      }
    };
    const node = iframeRef.current;
    if (node) node.addEventListener('load', onLoad);
    return () => { if (node) node.removeEventListener('load', onLoad); };
  }, []);

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 80px)', background: '#000' }}>
      <iframe
        ref={iframeRef}
        src="/external/page.html"
        title="Snapshot"
        style={{ width: '100%', height: '100%', border: 'none', background: '#000' }}
      />
    </div>
  );
};

export default ContentSnapshot;