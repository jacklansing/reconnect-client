import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Navbar.css';

function makeNavBar() {
  if (TokenService.hasAuthToken()) {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/">Posts</Link>
        <Link to="/">New Post</Link>
        <Link to="/">Messages</Link>
        <Link onClick={handleLogout} to="/">
          Sign Out
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </>
    );
  }
}

function handleLogout() {
  TokenService.clearAuthToken();
}

const Navbar = props => {
  return (
    <nav role="navigation" className="Navbar">
      {makeNavBar()}
    </nav>
  );
};

export default Navbar;
