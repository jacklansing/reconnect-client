import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Navbar.css';

class Navbar extends Component {
  makeLoggedInNavBar = () => {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/">Posts</Link>
        <Link to="/new-post">New Post</Link>
        <Link to="/">Messages</Link>
        <Link onClick={this.handleLogout} to="/">
          Sign Out
        </Link>
      </>
    );
  };

  makeLoggedOutNavBar = () => {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </>
    );
  };

  handleLogout = () => {
    TokenService.clearAuthToken();
  };

  render() {
    return (
      <nav role="navigation" className="Navbar">
        {TokenService.hasAuthToken()
          ? this.makeLoggedInNavBar()
          : this.makeLoggedOutNavBar()}
      </nav>
    );
  }
}

export default Navbar;
