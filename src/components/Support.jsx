import React from 'react';
import './Support.css';

const CurrencySupport = () => {
  return (
    <section className="currency-section">
      <h2 className="currency-title">CURRENCY SUPPORT</h2>
      <div className="currency-logos">
        <img src="/1.ico" alt="Nagad" className="currency-logo" />
        <img src="/2.ico" alt="bKash" className="currency-logo" />
      </div>
    </section>
  );
};

export default CurrencySupport;