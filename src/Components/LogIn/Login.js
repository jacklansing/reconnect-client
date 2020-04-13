import React, { Component } from 'react';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Sign-Up">
          <h2>Log In</h2>
          <form className="Sign-Up__form" onSubmit={this.handleSubmit}>
            <label htmlFor="user_name">User Name</label>
            <input type="user_name" id="user_name" name="user_name" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <input type="submit" />
          </form>
        </section>
      </>
    );
  }
}
export default Login;
