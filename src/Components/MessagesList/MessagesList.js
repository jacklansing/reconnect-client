import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import './MessagesList.css';

class MessagesList extends Component {
  state = {
    threads: [],
    error: null
  };

  componentDidMount() {
    AuthApiService.getMessageThreads()
      .then(threads => this.setState({ threads }))
      .catch(res => {
        this.setState({ error: res.error });
      });
  }

  formatDate(timestamp) {
    const currentDate = new Date(timestamp);
    const time = currentDate.toLocaleTimeString();
    const date = currentDate.toLocaleDateString();
    return `${date} at ${time}`;
  }

  render() {
    const { threads } = this.state;
    return (
      <>
        <section className="Messages">
          <h2>Conversations</h2>
          <ul className="Messages__list">
            {threads.map(thread => (
              <li key={thread.thread_id}>
                <p className="displayName">{thread.display_name}</p>
                <p>{thread.content}</p>
                <Link
                  to={{
                    pathname: '/messages/chat',
                    state: thread.thread_id
                  }}
                >
                  Reply
                </Link>
                <p>{this.formatDate(thread.date_created)}</p>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
export default MessagesList;
