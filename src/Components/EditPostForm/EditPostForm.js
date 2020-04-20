import React, { Component } from 'react';
import { Button, Textarea, Input } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import './EditPostForm.css';

class EditPostForm extends Component {
  state = {
    error: null,
    title: '',
    description: '',
    device: '',
    condition: '',
    location: ''
  };

  componentDidMount() {
    this.setState({
      ...this.props.location.postProps
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const updatedDevice = {
      id: this.state.post_id,
      title: this.state.title,
      description: this.state.description,
      device: this.state.device,
      condition: this.state.condition,
      location: this.state.location
    };
    try {
      await AuthApiService.updateDevice(updatedDevice);
      this.props.history.push('/my-posts');
    } catch (e) {
      this.setState({ error: e });
    }
  };

  render() {
    return (
      <>
        <section className="Edit-Post">
          <h2>Update Post</h2>
          <form className="Edit-Post__form" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              name="description"
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
            <label htmlFor="device">Device Type</label>
            <select
              name="device"
              id="device"
              value={this.state.device}
              onChange={e => this.setState({ device: e.target.value })}
            >
              <option value="Android" default>
                Android
              </option>
              <option value="iPhone">iPhone</option>
              <option value="Windows">Windows</option>
              <option value="Macbook">Macbook</option>
            </select>
            <label htmlFor="condition">Condition</label>
            <select
              name="condition"
              id="condition"
              value={this.state.condition}
              onChange={e => this.setState({ condition: e.target.value })}
            >
              <option value="very good">Very Good</option>
              <option value="good" default>
                Good
              </option>
              <option value="okay">Okay</option>
              <option value="damaged">Damaged</option>
            </select>
            <label htmlFor="location">Location</label>
            <select
              id="location"
              name="location"
              value={this.state.location}
              onChange={e => this.setState({ location: e.target.value })}
            >
              <option value="Albany, NY">Albany, NY</option>
              <option value="Schenectady, NY">Schenectady, NY</option>
            </select>
            <Button type="submit">Update Post</Button>
          </form>
        </section>
      </>
    );
  }
}
export default EditPostForm;
