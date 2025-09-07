import React from "react";
import "./ContainerSection.css";

const ContainerSection = ({ imageUrl = "/external/Group-26-1.png", children }) => {
  return (
    <section className="container-section" role="region" aria-label="feature container">
      <div
        className="container-bg"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="container-overlay" />
      <div className="container-content">
        {children ? children : (
          <div className="container-default">
            <h2>EXPLORE MORE</h2>
            <p>Discover exclusive offers and features tailor-made for you.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContainerSection;

