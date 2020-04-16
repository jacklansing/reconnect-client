import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostListItem extends Component {
  render() {
    const {
      author_id,
      post_id,
      author_name,
      title,
      description,
      device,
      condition,
      location,
      userCanEdit
    } = this.props;
    return (
      <li>
        <h4>{title}</h4>
        <p>{author_name}</p>
        <p>{description}</p>
        <p>{device}</p>
        <p>{condition}</p>
        <p>{location}</p>
        <Link
          to={{
            pathname: '/new-message',
            state: { author_id }
          }}
        >
          Send Message
        </Link>
        <p>
          {userCanEdit && (
            <Link
              to={{
                pathname: '/edit-post',
                postProps: {
                  author_id,
                  post_id,
                  title,
                  description,
                  device,
                  condition,
                  location
                }
              }}
            >
              Edit Post
            </Link>
          )}
        </p>
      </li>
    );
  }
}
export default PostListItem;
