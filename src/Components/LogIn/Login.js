import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Sign-Up">
          <h2>Log In</h2>
          <form className="Sign-Up__form">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <input type="submit" />
          </form>
        </section>
      </>
    );
  }
}
export default Login;
