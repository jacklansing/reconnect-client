import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

class NewMessageForm extends Component {
  state = {
    error: null
  };

  handleSubmit = async e => {
    e.preventDefault();
    const recipient_id = this.props.location.state.author_id;
    const { content } = e.target;
    try {
      const thread = await AuthApiService.postMessageThread(recipient_id);
      const message = await AuthApiService.postNewMessage({
        content: content.value,
        thread_id: thread.id
      });
      console.log('message is', message);
    } catch (e) {
      this.setState({ error: e });
    }
  };

  render() {
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Message">
          <form className="Message__form" onSubmit={this.handleSubmit}>
            <h2>New Message</h2>
            <label htmlFor="content">New message to Bobby :</label>
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
