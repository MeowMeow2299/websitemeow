import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [logoSrc, setLogoSrc] = useState('/photos/logo.png');
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="logo">
            <NavLink to="/" aria-label="Home">
              <img src={logoSrc} onError={() => setLogoSrc('/LOGO.png')} alt="Logo" />
            </NavLink>
          </h1>
        </div>

        <div className="navbar-center">
          <p className="slogan">Bet Smart Win More</p>
        </div>

        <div className="navbar-right">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="auth-actions">
            <NavLink className="btn-auth" to="/login">Login</NavLink>
            <NavLink className="btn-auth primary" to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;