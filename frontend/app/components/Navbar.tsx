import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">Lead</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/category">Category</NavLink>
      </div>
      <div className="mobile-menu">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/">
          <i className="fas fa-bars">X</i>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
