import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="logo">
            <img src="./LOGO.png" alt="Logo" />
          </h1>
        </div>

        <div className="navbar-center">
          <p className="slogan">Bet Smart, Win More.</p>
        </div>

        <div className="navbar-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;