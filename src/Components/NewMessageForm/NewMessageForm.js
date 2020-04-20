import React, { Component } from 'react';
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

  render() {
    return (
      <>
        <section className="Message">
          <form className="Message__form" onSubmit={this.handleSubmit}>
            <h2>New Message</h2>
            <label htmlFor="content">New message:</label>
            <textarea
              id="content"
              name="content"
              rows="10"
              cols="50"
            ></textarea>
            <input type="submit" />
            <button>Cancel</button>
          </form>
        </section>
      </>
    );
  }
}
export default NewMessageForm;
