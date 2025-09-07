import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

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
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/casino" className={({ isActive }) => isActive ? 'active' : ''}>CASINO GAMES</NavLink>
            </li>
            <li>
              <NavLink to="/slots" className={({ isActive }) => isActive ? 'active' : ''}>SLOTS</NavLink>
            </li>
            <li>
              <NavLink to="/live" className={({ isActive }) => isActive ? 'active' : ''}>LIVE CASINO</NavLink>
            </li>
            <li>
              <NavLink to="/table" className={({ isActive }) => isActive ? 'active' : ''}>TABLE GAMES</NavLink>
            </li>
            <li>
              <NavLink to="/lottery" className={({ isActive }) => isActive ? 'active' : ''}>LOTTERY</NavLink>
            </li>
            <li>
              <NavLink to="/sports" className={({ isActive }) => isActive ? 'active' : ''}>SPORTS</NavLink>
            </li>
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