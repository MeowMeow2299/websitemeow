import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-section">
          <img src="/LOGO.png" alt="Gamebuzz" />
          <p className="tagline">
            A GAME STUDIO CRAFTING EXCITING, HIGH-QUALITY VIDEO GAMES, PRIORITIZING IMMERSIVE GAMEPLAY AND MECHANICS.
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
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Tiktok"><i className="fab fa-tiktok"></i></a>
          </div>
          <div className="download-buttons">
            <button className="google-play" aria-label="Download on Google Play">Google Play</button>
            <button className="app-store" aria-label="Download on App Store">App Store</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025. GAMEBUZZ. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;