import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  handleSubmit = e => {
    e.preventDault();
    const { user_name, display_name, password, type } = e.target;
    const newUser = {
      user_name,
      display_name,
      password,
      type
    };
    console.log(newUser);
  };

  render() {
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Sign-Up">
          <h2>Sign Up</h2>
          <form className="Sign-Up__form" onSubmit={this.handleSubmit}>
            <label htmlFor="user_name">Username</label>
            <input type="user_name" id="user_name" name="user_name" />
            <label htmlFor="display_name">Display Name</label>
            <input type="display_name" id="display_name" name="display_name" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <label htmlFor="type">Interest</label>
            <select id="type" name="type">
              <option value="donor">Donor</option>
              <option value="seeking">Seeking Tech</option>
            </select>
            <input type="submit" />
          </form>
        </section>
      </>
    );
  }
}
export default SignUp;
