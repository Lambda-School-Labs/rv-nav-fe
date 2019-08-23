import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <p style={{ fontWeight: 'bold' }}>
        RV<span style={{ fontWeight: 'normal' }}>Nav</span>
      </p>
      <div>
        <NavLink exact to="/" style={{ marginRight: 10 }}>
          Home
        </NavLink>
        <NavLink to="/auth" style={{ marginRight: 10 }}>
          Auth
        </NavLink>
        <NavLink to="/map" style={{ marginRight: 10 }}>
          Map
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;