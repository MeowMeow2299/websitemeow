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
          header, nav, footer, aside { display: none !important; }
          [class*="header" i], [id*="header" i], [class*="navbar" i], [id*="navbar" i] { display: none !important; }
          [class*="footer" i], [id*="footer" i], [class*="sidebar" i], [id*="sidebar" i] { display: none !important; }
          html, body { background: transparent !important; margin: 0 !important; padding: 0 !important; }
          body * { max-width: 100% !important; }
        `;
        doc.head.appendChild(style);
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