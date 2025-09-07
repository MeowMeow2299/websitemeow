import React from "react";
import "./ScrollingText.css"; // import file css riêng

const ScrollingText = () => {
  return (
    <div className="scroll-container" aria-label="marquee promotional messages">
      <div className="scroll-shine" />
      <div className="scroll-stage">
        <div className="scroll-strip">
        <span>🤝 REFER A FRIEND</span>
        <span>💳 PAY TO WIN</span>
        <span>🎁 CLAIM DAILY BONUS</span>
        <span>⚡ INSTANT CASHBACK</span>
        <span>🏆 LEVEL UP REWARDS</span>
        <span>🎯 VIP EXCLUSIVE PERKS</span>
        <span>🚀 FAST WITHDRAWALS</span>
        <span>🎉 WEEKEND JACKPOT</span>
        </div>
        <div className="scroll-strip scroll-strip-dup" aria-hidden="true">
        <span>🤝 REFER A FRIEND</span>
        <span>💳 PAY TO WIN</span>
        <span>🎁 CLAIM DAILY BONUS</span>
        <span>⚡ INSTANT CASHBACK</span>
        <span>🏆 LEVEL UP REWARDS</span>
        <span>🎯 VIP EXCLUSIVE PERKS</span>
        <span>🚀 FAST WITHDRAWALS</span>
        <span>🎉 WEEKEND JACKPOT</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;

