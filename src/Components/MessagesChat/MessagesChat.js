import React, { Component } from 'react';
import { Button, Input, Label } from '../Utils/Utils';
import Spinner from '../Utils/Spinner/Spinner';
import ButtonSpinner from '../Utils/ButtonSpinner/ButtonSpinner';
import AuthApiService from '../../services/auth-api-service';
import './MessagesChat.css';

class MessagesChat extends Component {
  state = {
    messages: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    const thread_id = this.props.location.state;
    AuthApiService.getMessageThreadChats(thread_id)
      .then(messages => this.setState({ messages, loading: false }))
      .catch(res => {
        this.setState({ error: res.error, loading: false });
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { content } = e.target;
    const thread_id = this.props.location.state;
    this.setState({ loading: true });
    AuthApiService.postNewMessage({
      content: content.value,
      thread_id: thread_id
    })
      .then(message => {
        this.setState({
          messages: [message, ...this.state.messages]
        });
        content.value = '';
        this.setState({ loading: false });
      })
      .catch(res => {
        this.setState({ error: res.error, loading: false });
      });
  };

  render() {
    const { messages } = this.state;
    return (
      <section className="Messages">
        <h2>New Reply</h2>
        <form className="MessagesChat__form" onSubmit={this.handleSubmit}>
          <Label htmlFor="content">Message: </Label>
          <Input type="text" id="content" name="content" />
          <Button type="submit">
            {this.state.loading ? <ButtonSpinner /> : 'Reply'}
          </Button>
        </form>
        <ul className="MessagesChat__list">
          {messages.map(message => (
            <li key={message.id}>
              <p className="displayName">{message.display_name}</p>
              <p className="messageContent">{message.content}</p>
            </li>
          ))}
        </ul>
        {this.state.loading && <Spinner />}
      </section>
    );
  }
}
export default MessagesChat;
