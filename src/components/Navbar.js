import React from 'react';

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navContent">
        <h2>navbar</h2>
      </div>
      <div className="navLinks">
        <a href="/">Home</a>

        <a href="/units">Units</a>
      </div>
    </div>
  );
};

export default Navbar;
