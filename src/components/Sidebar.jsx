import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>☰</div>

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav className="menu">
          <ul>
            <li className="active">HOME</li>
            <li>CASINO GAMES</li>
            <li>SLOTS</li>
            <li>LIVE CASINO</li>
            <li>TABLE GAMES</li>
            <li>LOTTERY</li>
            <li>SPORTS</li>
            <li className="highlight-blue">GAMECHICKEN</li>
            <li className="highlight-yellow">E-SPORT</li>
          </ul>
        </nav>

        <div className="popular-section">
          <h4>POPULAR GAMES</h4>
          <ul>
            <li>BGD33</li>
            <li>BETBOT</li>
            <li>JEETBUZZ</li>
            <li>CRICKEX</li>
            <li>TK999</li>
            <li>CK444</li>
            <li>L444 ONLINE GAME</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;