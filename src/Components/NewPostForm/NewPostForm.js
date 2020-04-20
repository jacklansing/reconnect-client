import React, { Component } from 'react';
import { Button, Textarea, Input, Select } from '../Utils/Utils';
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
        <section className="New-Post">
          <h2>New Post</h2>
          <form className="New-Post__form" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <Input type="text" id="title" name="title" />
            <label htmlFor="description">Description</label>
            <Textarea id="description" name="description"></Textarea>
            <label htmlFor="device">Device Type</label>
            <Select name="device" id="device">
              <option value="Android" default>
                Android
              </option>
              <option value="iPhone">iPhone</option>
              <option value="Windows">Windows</option>
              <option value="Macbook">Macbook</option>
            </Select>
            <label htmlFor="condition">Condition</label>
            <Select name="condition" id="condition">
              <option value="very good">Very Good</option>
              <option value="good" default>
                Good
              </option>
              <option value="okay">Okay</option>
              <option value="damaged">Damaged</option>
            </Select>
            <label htmlFor="location">Location</label>
            <Select id="location" name="location">
              <option value="Albany, NY">Albany, NY</option>
              <option value="Schenectady, NY">Schenectady, NY</option>
            </Select>
            <Button type="submit">New Post</Button>
          </form>
        </section>
      </>
    );
  }
}
export default NewPostForm;
