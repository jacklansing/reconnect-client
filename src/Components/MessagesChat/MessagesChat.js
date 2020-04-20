import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import './MessagesChat.css';

class MessagesChat extends Component {
  state = {
    messages: [],
    error: null
  };

  componentDidMount() {
    const thread_id = this.props.location.state;
    AuthApiService.getMessageThreadChats(thread_id)
      .then(messages => this.setState({ messages }))
      .catch(res => {
        this.setState({ error: res.error });
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { content } = e.target;
    const thread_id = this.props.location.state;
    AuthApiService.postNewMessage({
      content: content.value,
      thread_id: thread_id
    })
      .then(message => {
        this.setState({
          messages: [message, ...this.state.messages]
        });
        content.value = '';
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { messages } = this.state;
    return (
      <section className="Messages">
        <h2>New Reply</h2>
        <form className="MessagesChat__form" onSubmit={this.handleSubmit}>
          <label htmlFor="content">Message: </label>
          <Input type="text" id="content" name="content" />
          <Button type="submit">Reply</Button>
        </form>
        <ul className="MessagesChat__list">
          {messages.map(message => (
            <li key={message.id}>
              <p className="displayName">{message.display_name}</p>
              <p className="messageContent">{message.content}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default MessagesChat;
