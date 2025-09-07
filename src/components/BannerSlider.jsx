import React, { useEffect, useRef, useState, useCallback } from 'react';
import './BannerSlider.css';

const bannerImages = [
  '/external/1749162375575_NEW-lixi-24.jpeg',
  '/external/1749163431394_slide3_690x270_206.6_20napdau.jpeg',
  '/external/1749163824977_slide4_690x270.iphone16.jpeg',
  '/external/1749164108376_slide5_690x270.ngayhv26.jpeg',
  '/external/1749168735110_baner_web_20_20new_20gi_E1_BA_A3i_20thuong_20bi_20an.jpeg',
  '/external/1749634576437_slide2_web_20banne_20gi_E1_BB_9Bi_20thi_E1_BB_87u_20m_E1_BB_9Bi_20.jpeg',
  '/external/1756068583513_egg2_slide_web_20v_C3_B2ng8.jpeg',
  '/external/1756679705722_Pop_20up_20PC_201000x750_204.jpeg',
  '/external/1756680100469_BETBDT_20banne_20PC_20690x270_202.jpeg'
];

const BannerSlider = () => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const slideTo = useCallback((index) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[index];
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    setActive(index);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let timer = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % bannerImages.length;
        const child = el.children[next];
        if (child) el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
        return next;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-slider">
      <div className="banner-track" ref={trackRef}>
        {bannerImages.map((src, i) => (
          <div className="banner-item" key={i}>
            <img src={src} alt={`banner-${i+1}`} />
          </div>
        ))}
      </div>
      <div className="banner-dots">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? 'active' : ''}`}
            onClick={() => slideTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;