import React from 'react';

const ContentSnapshot = () => {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 80px)', background: '#000' }}>
      <iframe
        src="/external/page.html"
        title="Snapshot"
        style={{ width: '100%', height: '100%', border: 'none', background: '#000' }}
      />
    </div>
  );
};

export default ContentSnapshot;