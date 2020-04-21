import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { Button, Input, Select, Label } from '../Utils/Utils';
import './SignUp.css';

class SignUp extends Component {
  state = { error: null };

  handleSubmit = e => {
    e.preventDefault();
    const { user_name, display_name, password, type } = e.target;
    this.setState({ error: null });

    AuthApiService.postUser({
      user_name: user_name.value,
      display_name: display_name.value,
      password: password.value,
      user_type: type.value
    })
      .then(user => {
        user_name.value = '';
        display_name.value = '';
        password.value = '';
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
    this.props.history.push('/');
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <section className="Sign-Up">
          <h2>Sign Up</h2>
          <div role="alert">{error && <p>{error}</p>}</div>
          <form className="Sign-Up__form" onSubmit={this.handleSubmit}>
            <Label htmlFor="user_name">Username</Label>
            <Input type="user_name" id="user_name" name="user_name" />
            <Label htmlFor="display_name">Display Name</Label>
            <Input type="display_name" id="display_name" name="display_name" />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" />
            <Label htmlFor="type">Interest</Label>
            <Select id="type" name="type">
              <option value="Donor">Donor</option>
              <option value="Seeking">Seeking Tech</option>
            </Select>
            <Button type="submit">Sign Up</Button>
          </form>
        </section>
      </>
    );
  }
}
export default SignUp;
