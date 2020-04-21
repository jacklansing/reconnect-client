import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { Button, Input, Label } from '../Utils/Utils';
import { Link } from 'react-router-dom';
import './Login.css';

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
        this.props.setAuthStatus(true);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <section className="Log-In">
          <h2>Log In</h2>
          <div role="alert">{error && <p>{error}</p>}</div>
          <form className="Log-In__form" onSubmit={this.handleSubmit}>
            <Label htmlFor="user_name">User Name</Label>
            <Input type="user_name" id="user_name" name="user_name" />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" />
            <Button type="submit">Log In</Button>
          </form>
          <p>Don't have an account yet?</p>
          <p>
            <Link to="/sign-up">Click here to sign up.</Link>
          </p>
        </section>
      </>
    );
  }
}
export default Login;
