import React from "react";
import "./ScrollingText.css"; // import file css riêng

const ScrollingText = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        <div className="scroll-text">
          <span>🤝 GIỚI THIỆU BẠN BÈ</span>
          <span>💎 NẠP LÀ THẮNG</span>
          <span>🎁 THƯỞNG NẠP ĐẦU</span>
          <span>🔁 HOÀN TRẢ HÀNG NGÀY</span>
          <span>🚀 CƯỢC NHANH RÚT NHANH</span>
          <span>👑 THÀNH VIÊN VIP</span>
          <span>🛡️ AN TOÀN BẢO MẬT</span>
          <span>🔥 KHUYẾN MÃI KHỦNG</span>
          <span>🎯 NHIỆM VỤ NHẬN QUÀ</span>
        </div>
        <div className="scroll-text" aria-hidden="true">
          <span>🤝 GIỚI THIỆU BẠN BÈ</span>
          <span>💎 NẠP LÀ THẮNG</span>
          <span>🎁 THƯỞNG NẠP ĐẦU</span>
          <span>🔁 HOÀN TRẢ HÀNG NGÀY</span>
          <span>🚀 CƯỢC NHANH RÚT NHANH</span>
          <span>👑 THÀNH VIÊN VIP</span>
          <span>🛡️ AN TOÀN BẢO MẬT</span>
          <span>🔥 KHUYẾN MÃI KHỦNG</span>
          <span>🎯 NHIỆM VỤ NHẬN QUÀ</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;

