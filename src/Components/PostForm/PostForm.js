import React, { Component } from 'react';
import { Button, Textarea, Input, Select, Label, Alert } from '../Utils/Utils';
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
    location: 'Albany, NY',
    file: '',
    image_url: '',
    previous_image_url: null
  };

  static defaultProps = {
    location: {},
    history: {}
  };

  componentDidMount() {
    // If the component reloads on the edit post form, we redirect so that
    // an empty update is not accidentally submitted.
    if (
      this.props.location.pathname === '/edit-post' &&
      !this.props.location.postProps
    ) {
      this.props.history.push('/posts');
    }

    if (this.props.location.postProps) {
      this.setState({
        ...this.props.location.postProps,
        previous_image_url: this.props.location.postProps.image_url
      });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    let formData = new FormData();
    formData.append('id', this.state.post_id);
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('device', this.state.device);
    formData.append('condition', this.state.condition);
    formData.append('location', this.state.location);
    formData.append('image', this.state.file);

    if (this.state.previous_image_url) {
      formData.append('previous_image_url', this.state.previous_image_url);
    }

    try {
      await this.props.onSubmit(formData);
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

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        image_url: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { error } = this.state;
    const { image_url } = this.state;
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
              required
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />

            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              required
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
            <Input
              type="file"
              accept="image/jpeg, image/png"
              onChange={this.handleImageChange}
            />
            {image_url && (
              <img
                src={image_url}
                alt="upload preview"
                className="upload-preview"
              />
            )}
            {error && <Alert>{error}</Alert>}
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
