import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navContent">
        <h2>Age Of Empires</h2>
      </div>
      <div className="navLinks">
        <NavLink
          to="/"
          className="nav-link"
          style={({isActive}) => {
            return {
              textDecoration: isActive ? 'underline' : 'none',
            };
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/units"
          className="nav-link"
          style={({isActive}) => {
            return {
              textDecoration: isActive ? 'underline' : 'none',
            };
          }}
        >
          Units
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
