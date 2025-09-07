import React from "react";
import "./ScrollingText.css"; // import file css riêng

const ScrollingText = () => {
  const phrases = [
    "🤝 REFER A FRIEND",
    "💳 PAY TO WIN",
    "🎁 CLAIM DAILY BONUS",
    "⚡ INSTANT CASHBACK",
    "🏆 LEVEL UP REWARDS",
    "🎯 VIP EXCLUSIVE PERKS",
    "🚀 FAST WITHDRAWALS",
    "🎉 WEEKEND JACKPOT"
  ];

  return (
    <div className="scroll-container" aria-label="marquee promotional messages">
      <div className="scroll-shine" />
      <div className="scroll-stage">
        <div className="scroll-strip">
          {phrases.map((t, i) => (
            <span key={`a-${i}`}>{t}</span>
          ))}
          {phrases.map((t, i) => (
            <span key={`a2-${i}`}>{t}</span>
          ))}
        </div>
        <div className="scroll-strip scroll-strip-dup" aria-hidden="true">
          {phrases.map((t, i) => (
            <span key={`b-${i}`}>{t}</span>
          ))}
          {phrases.map((t, i) => (
            <span key={`b2-${i}`}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;

