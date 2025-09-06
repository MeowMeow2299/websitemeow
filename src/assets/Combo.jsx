import React from "react";
import "./combo.css";

const menuItems = [
  { icon: "🏠", label: "Home" },
  { icon: "🔥", label: "Hot Games" },
  { icon: "❤️", label: "Favourite Items" },
  { icon: "🎰", label: "Slot" },
  { icon: "📡", label: "Live" },
  { icon: "♠️", label: "Poker" },
  { icon: "🏀", label: "Sports" },
  { icon: "🎡", label: "Lottery" },
  { icon: "🎮", label: "E-sports" },
];

const Combo = () => {
  return (
    <div className="combo-navbar">
      {menuItems.map((item, index) => (
        <div key={index} className="combo-item">
          <div className="combo-icon">{item.icon}</div>
          <div className="combo-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Combo;
