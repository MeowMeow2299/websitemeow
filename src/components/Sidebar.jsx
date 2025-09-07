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
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/casino" className={({ isActive }) => isActive ? 'active' : ''}>Casino Games</NavLink>
            </li>
            <li>
              <NavLink to="/slots" className={({ isActive }) => isActive ? 'active' : ''}>Slots</NavLink>
            </li>
            <li>
              <NavLink to="/live" className={({ isActive }) => isActive ? 'active' : ''}>Live Casino</NavLink>
            </li>
            <li>
              <NavLink to="/table" className={({ isActive }) => isActive ? 'active' : ''}>Table Games</NavLink>
            </li>
            <li>
              <NavLink to="/lottery" className={({ isActive }) => isActive ? 'active' : ''}>Lottery</NavLink>
            </li>
            <li>
              <NavLink to="/sports" className={({ isActive }) => isActive ? 'active' : ''}>Sports</NavLink>
            </li>
            <li className="highlight-blue">Gamechicken</li>
            <li className="highlight-yellow">E-Sport</li>
          </ul>
        </nav>

        <div className="popular-section">
          <h4>Popular Games</h4>
          <ul>
            <li>BGD33</li>
            <li>BETBDT</li>
            <li>JEETBUZZ</li>
            <li>Crickex</li>
            <li>TK999</li>
            <li>CK444</li>
            <li>L444 Online Game</li>
            <li>Crickex</li>
            <li>Crickex Login</li>
            <li>Crickex Bet</li>
            <li>CRICKEX APP</li>
            <li>Crickex Online</li>
            <li>Crickex Account Create</li>
            <li>CRICKEX BONUS</li>
            <li>Crickex BD Login</li>
            <li>Crickex Betting App</li>
            <li>Crickex Bet Bangla</li>
            <li>JEETBUZZ</li>
            <li>Jeetbuzz Login</li>
            <li>Jeetbuzz Casino</li>
            <li>Jeetbuzz Game</li>
            <li>Jeetbuzz Online</li>
            <li>Jeetbuzz Partner</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;