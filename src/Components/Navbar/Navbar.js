import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Navbar.css';

class Navbar extends Component {
  state = {
    displayNav: false
  };

  makeLoggedInNavBar = () => {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/my-posts">My Posts</Link>
        <Link to="/new-post">New Post</Link>
        <Link to="/messages">Messages</Link>
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
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </>
    );
  };

  handleLogout = () => {
    TokenService.clearAuthToken();
    this.props.setAuthStatus(false);
  };

  handleToggleMenu = () => {
    this.setState({
      displayNav: !this.state.displayNav
    });
  };

  render() {
    return (
      <nav
        role="navigation"
        className={`Navbar ${this.state.displayNav ? 'shown' : 'hidden'}`}
      >
        <h1>Re-Connect</h1>
        <button onClick={this.handleToggleMenu} className="Hamburger">
          <span className="Hamburger__icon">+</span>
        </button>
        {this.props.authStatus
          ? this.makeLoggedInNavBar()
          : this.makeLoggedOutNavBar()}
      </nav>
    );
  }
}

export default Navbar;
