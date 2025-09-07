import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Slider.css";

function useScrapedImages() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/external/downloads.json')
      .then(r => r.json())
      .then(list => {
        // Use original banner images without altering sizes or cropping
        const bannerExact = list.filter(it => /slide|banner|banne|690x270/i.test(it.file));
        const unique = [];
        const seen = new Set();
        for (const it of bannerExact) {
          if (seen.has(it.file)) continue;
          seen.add(it.file);
          unique.push({ id: seen.size, title: it.file.split('/').pop().split('.')[0], url: `/${it.file}` });
        }
        // Fallback: if no banners found, include all images
        if (unique.length === 0) {
          const all = list.filter(it => /\.(png|jpe?g|webp|gif|avif)$/i.test(it.file));
          for (const it of all) {
            if (seen.has(it.file)) continue;
            seen.add(it.file);
            unique.push({ id: seen.size, title: it.file.split('/').pop().split('.')[0], url: `/${it.file}` });
          }
        }
        setItems(unique);
      })
      .catch(() => setItems([]));
  }, []);
  return items;
}

const Slider = () => {
  const sliderRef = useRef(null);
  const images = useScrapedImages();

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // tốc độ chạy
    const interval = setInterval(() => {
      if (slider) {
        slider.scrollLeft += scrollStep;
        scrollAmount += scrollStep;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0; // quay lại từ đầu
          scrollAmount = 0;
        }
      }
    }, 20); // chỉnh delay (ms) để nhanh/chậm

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-header">
        <h2>🎲 TOP SLOTS POPULAR IN BANGLADESH</h2>
        <a href="#">VIEW ALL ↗</a>
      </div>
      <div className="slider" ref={sliderRef}>
        {images.map((item) => (
          <div key={item.id} className="card">
            <img src={item.url} alt={item.title} />
            <div className="card-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
