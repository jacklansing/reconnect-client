import React, { Component } from 'react';
import { Button } from '../Utils/Utils';
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
    console.log(messages);
    return (
      <>
        <form className="Message__form" onSubmit={this.handleSubmit}>
          <h2>New Message</h2>
          <label htmlFor="content">Reply :</label>
          <input type="text" id="content" name="content" />
          <Button type="submit">Reply</Button>
        </form>
        <ul className="Messages__list">
          {messages.map(message => (
            <li key={message.id}>
              {message.display_name}
              <p>{message.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default MessagesChat;
