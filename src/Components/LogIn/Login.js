import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

class Login extends Component {
  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push('/');
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Sign-Up">
          <h2>Log In</h2>
          <div role="alert">{error && <p>{error}</p>}</div>
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
