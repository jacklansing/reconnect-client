import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

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

  render() {
    const { messages } = this.state;
    console.log(messages);
    return (
      <>
        <ul>
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
