import React, { useEffect, useRef } from "react";
import "./dom.css";

const images = [
  { id: 1, title: "STARBURST 5", url: "./2.png" },
  { id: 2, title: "STARBURST 4", url: "./2.png" },
  { id: 3, title: "STARBURST 3", url: "./2.png" },
  { id: 4, title: "STARBURST 2", url: "./2.png" },
  { id: 5, title: "STARBURST 8", url: "./2.png" },
  { id: 6, title: "STARBURST 6", url: "./2.png" },
    { id: 7, title: "STARBURST 7", url: "./2.png" },
    { id: 8, title: "STARBURST 1", url: "./2.png" },
];

const Dom1 = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;

    const interval = setInterval(() => {
      if (slider) {
        slider.scrollLeft += scrollStep;
        scrollAmount += scrollStep;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-header">
        <h2>🎲 Live Dealer & Game Show Titles</h2>
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

export default Dom1;
