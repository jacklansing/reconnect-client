import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

class MessagesList extends Component {
  state = {
    messages: [],
    error: null
  };

  componentDidMount() {
    AuthApiService.getMessageThreads().then(threads => console.log(threads));
  }

  render() {
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Messages">
          <h2>Messages</h2>
          <ul className="Messages__list">
            <li>
              <h3>Bob</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button>Reply</button>
            </li>
          </ul>
        </section>
      </>
    );
  }
}
export default MessagesList;
