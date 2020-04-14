import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostListItem extends Component {
  render() {
    const { author_id } = this.props;
    return (
      <li>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <p>{this.props.device}</p>
        <p>{this.props.condition}</p>
        <p>{this.props.location}</p>
        <Link
          to={{
            pathname: '/new-message',
            state: { author_id, test: 'hello' }
          }}
        >
          Send Message
        </Link>
      </li>
    );
  }
}
export default PostListItem;
