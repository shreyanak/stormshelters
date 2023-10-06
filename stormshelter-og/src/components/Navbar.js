import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item">
          <a href="/" className="nav-link">
            StormShelters
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/cities" className="nav-link">
            Cities
          </a>
        </li>
        <li className="nav-item">
          <a href="/shelter" className="nav-link">
            Shelter & Relief
          </a>
        </li>
        <li className="nav-item">
          <a href="/disasters" className="nav-link">
            Disasters
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
