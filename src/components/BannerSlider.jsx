import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let rafId;
    const step = () => {
      el.scrollLeft += 1;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
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
    </div>
  );
};

export default BannerSlider;