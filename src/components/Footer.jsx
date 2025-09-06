import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-section">
          <img src="./LOGO.png" alt="Logo" />
          <p className="tagline">
            A GAME STUDIO CRAFTING EXCITING, HIGH-QUALITY VIDEO GAMES, PRIORITIZING IMMERSIVE GAMEPLAY AND MECHANICS. HAC HEATBASE PLATEA
          </p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Navigation</h4>
            <ul>
              <li>About</li>
              <li>About Us</li>
              <li>Anti Money Laundering</li>
              <li>Cash Back Offer</li>
              <li>Cookie Policy</li>
              <li>Dispute Resolution</li>
              <li>Fairness & RNG Testing</li>
              <li>Help Center FAQ</li>
              <li>How to Place a Bet</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Utilities</h4>
            <ul>
              <li>JetBuzz Affiliation Program</li>
              <li>KYC Policies</li>
              <li>Privacy Policy</li>
              <li>Promotion Bonus</li>
              <li>Self Exclusion</li>
              <li>Terms of Services</li>
              <li>VIP Loyalty Program</li>
              <li>Welcome Bonus</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="social-download">
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
          <div className="download-buttons">
            <button className="google-play">Google Play</button>
            <button className="app-store">App Store</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025. JET BUZZ GAMING. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;