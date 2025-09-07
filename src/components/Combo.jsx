import React from "react";
import { NavLink } from "react-router-dom";
import "./Combo.css";

const menuItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "🔥", label: "Hot Games", path: "/hot" },
  { icon: "❤️", label: "Favourite Items", path: "/favorites" },
  { icon: "🎰", label: "Slot", path: "/slots" },
  { icon: "📡", label: "Live", path: "/live" },
  { icon: "♠️", label: "Poker", path: "/poker" },
  { icon: "🏀", label: "Sports", path: "/sports" },
  { icon: "🎡", label: "Lottery", path: "/lottery" },
  { icon: "🎮", label: "E-sports", path: "/esports" },
];

const Combo = () => {
  return (
    <div className="combo-navbar">
      {menuItems.map((item, index) => (
        <NavLink key={index} to={item.path} className="combo-item">
          <div className="combo-icon">{item.icon}</div>
          <div className="combo-label">{item.label}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Combo;
