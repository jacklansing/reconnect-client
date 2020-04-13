import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  return (
    <nav role="navigation" className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );
};

export default Navbar;
