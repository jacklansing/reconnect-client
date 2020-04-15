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

  render() {
    const { threads } = this.state;
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Messages">
          <h2>Conversations</h2>
          <ul className="Messages__list">
            {threads.map(thread => (
              <li key={thread.thread_id}>
                With [ {thread.display_name} ]<p>{thread.content}</p>
                <Link
                  to={{
                    pathname: '/messages/chat',
                    state: thread.thread_id
                  }}
                >
                  Message back
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
export default MessagesList;
