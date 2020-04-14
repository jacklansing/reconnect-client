import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './NewPostForm.css';

class NewPostForm extends Component {
  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description, device, condition, location } = e.target;

    AuthApiService.postDevice({
      title: title.value,
      description: description.value,
      device: device.value,
      condition: condition.value,
      location: location.value
    })
      .then(device => {
        title.value = '';
        description.value = '';
        device.value = '';
        condition.value = '';
        location.value = '';
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
    // TODO: send to recent messages screen once implemented
    this.props.history.push('/');
  };

  render() {
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="New-Post">
          <h2>New Post</h2>
          <form className="New-Post__form" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"></textarea>
            <label htmlFor="device">Device Type</label>
            <select name="device" id="device">
              <option value="Android" default>
                Android
              </option>
              <option value="iPhone">iPhone</option>
              <option value="Windows">Windows</option>
              <option value="Macbook">Macbook</option>
            </select>
            <label htmlFor="condition">Condition</label>
            <select name="condition" id="condition">
              <option value="very good">Very Good</option>
              <option value="good" default>
                Good
              </option>
              <option value="okay">Okay</option>
              <option value="damaged">Damaged</option>
            </select>
            <label htmlFor="location">Location</label>
            <select id="location" name="location">
              <option value="Albany, NY">Albany, NY</option>
              <option value="Schenectady, NY">Schenectady, NY</option>
            </select>
            <input type="submit" />
          </form>
        </section>
      </>
    );
  }
}
export default NewPostForm;