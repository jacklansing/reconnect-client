import React, { Component } from 'react';
import { Button, Textarea, Input, Select, Label } from '../Utils/Utils';
import ButtonSpinner from '../Utils/ButtonSpinner/ButtonSpinner';
import './PostForm.css';

class PostForm extends Component {
  state = {
    error: null,
    loading: false,
    title: '',
    description: '',
    device: 'Android',
    condition: 'good',
    location: 'Albany, NY'
  };

  static defaultProps = {
    location: {},
    history: {}
  };

  componentDidMount() {
    if (this.props.location.postProps) {
      this.setState({
        ...this.props.location.postProps
      });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const deviceToPost = {
      id: this.state.post_id,
      title: this.state.title,
      description: this.state.description,
      device: this.state.device,
      condition: this.state.condition,
      location: this.state.location
    };
    try {
      await this.props.onSubmit(deviceToPost);
      this.setState({ loading: false });
      this.resetFields();
      this.props.history.push(this.props.redirectAfterSubmit);
    } catch (e) {
      this.setState({
        error: `There was an error with your request. Please try again later.`,
        loading: false
      });
    }
  };

  resetFields = () => {
    this.setState({
      title: '',
      description: '',
      device: 'Android',
      condition: 'good',
      location: 'Albany, NY'
    });
  };

  render() {
    return (
      <>
        <section className="Post">
          <h2>{this.props.formHeader}</h2>
          <form className="Post__form" onSubmit={this.handleSubmit}>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
            <Label htmlFor="device">Device Type</Label>
            <Select
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
            </Select>
            <Label htmlFor="condition">Condition</Label>
            <Select
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
            </Select>
            <Label htmlFor="location">Location</Label>
            <Select
              id="location"
              name="location"
              value={this.state.location}
              onChange={e => this.setState({ location: e.target.value })}
            >
              <option value="Albany, NY">Albany, NY</option>
              <option value="Schenectady, NY">Schenectady, NY</option>
            </Select>
            <Button type="submit">
              {this.state.loading ? (
                <ButtonSpinner />
              ) : (
                this.props.submitButtonText
              )}
            </Button>
          </form>
        </section>
      </>
    );
  }
}

export default PostForm;
