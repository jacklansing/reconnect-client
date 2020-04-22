import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Navbar.css';

class Navbar extends Component {
  state = {
    displayNav: false
  };

  loggedInLinks = [
    {
      to: '/',
      label: 'Home'
    },
    {
      to: '/posts',
      label: 'Posts'
    },
    {
      to: '/my-posts',
      label: 'My Posts'
    },
    {
      to: '/new-post',
      label: 'New Post'
    },
    {
      to: '/messages',
      label: 'Messages'
    }
  ];

  makeLoggedInNavBar = () => {
    return (
      <>
        {this.loggedInLinks.map(link => {
          return (
            <li key={link.to}>
              <Link onClick={this.handleCloseMenu} to={link.to}>
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link onClick={this.handleLogout} to="/">
            Sign Out
          </Link>
        </li>
      </>
    );
  };

  loggedOutLinks = [
    {
      to: '/',
      label: 'Home'
    },
    {
      to: '/sign-up',
      label: 'Sign Up'
    },
    {
      to: '/login',
      label: 'Log In'
    }
  ];

  makeLoggedOutNavBar = () => {
    return (
      <>
        {this.loggedOutLinks.map(link => {
          return (
            <li key={link.to}>
              <Link to={link.to} onClick={this.handleCloseMenu}>
                {link.label}
              </Link>
            </li>
          );
        })}
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

  handleCloseMenu = () => {
    this.setState({
      displayNav: false
    });
  };

  render() {
    return (
      <nav
        role="navigation"
        className={`Navbar ${this.state.displayNav ? 'shown' : 'hidden'}`}
      >
        <h1 className="Navbar__header">Re-Connect</h1>
        <button onClick={this.handleToggleMenu} className="Hamburger">
          <span className="Hamburger__icon">
            {this.state.displayNav ? '-' : '+'}
          </span>
        </button>
        <ul className="Navbar__list">
          {this.props.authStatus
            ? this.makeLoggedInNavBar()
            : this.makeLoggedOutNavBar()}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
