import React, { Component } from 'react';
import { Button, DeleteButton, Textarea, Label, Alert } from '../Utils/Utils';
import ButtonSpinner from '../Utils/ButtonSpinner/ButtonSpinner';
import AuthApiService from '../../services/auth-api-service';
import './NewMessageForm.css';

class NewMessageForm extends Component {
  state = {
    error: null,
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const recipient_id = this.props.location.state.author_id;
    const { content } = e.target;
    this.setState({ loading: true });
    AuthApiService.postMessageThread(recipient_id)
      .then(thread =>
        AuthApiService.postNewMessage({
          content: content.value,
          thread_id: thread.id
        })
      )
      .then(() => this.props.history.push('/messages'))
      .catch(res => {
        this.setState({ error: res.error, loading: false });
      });
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  render() {
    const { error } = this.state;
    return (
      <section className="Message">
        <h2>Start a new thread</h2>
        <form className="Message__form" onSubmit={this.handleSubmit}>
          <Label htmlFor="content">Message:</Label>
          <Textarea id="content" name="content" required></Textarea>
          {error && <Alert>{error}</Alert>}
          <Button type="submit">
            {this.state.loading ? <ButtonSpinner /> : 'Send Message'}
          </Button>
          <DeleteButton onClick={this.handleCancel} className="cancel">
            Cancel
          </DeleteButton>
        </form>
      </section>
    );
  }
}
export default NewMessageForm;
