import React, { Component } from 'react';
import { Button } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import './NewMessageForm.css';

class NewMessageForm extends Component {
  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const recipient_id = this.props.location.state.author_id;
    const { content } = e.target;
    AuthApiService.postMessageThread(recipient_id)
      .then(thread =>
        AuthApiService.postNewMessage({
          content: content.value,
          thread_id: thread.id
        })
      )
      .then(() => this.props.history.push('/messages'))
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  render() {
    return (
      <>
        <section className="Message">
          <form className="Message__form" onSubmit={this.handleSubmit}>
            <h2>Start a new thread</h2>
            <label htmlFor="content">Message:</label>
            <textarea
              id="content"
              name="content"
              rows="10"
              cols="50"
            ></textarea>
            <Button type="submit">Send Message</Button>
            <Button onClick={this.handleCancel} className="cancel">
              Cancel
            </Button>
          </form>
        </section>
      </>
    );
  }
}
export default NewMessageForm;
