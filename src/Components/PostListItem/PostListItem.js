import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

class PostListItem extends Component {
  state = {
    error: null
  };

  handleDeletePost = () => {
    this.setState({ error: null });
    AuthApiService.deletePost(this.props.post_id)
      .then(res => {
        this.props.deletePost(this.props.post_id);
      })
      .catch(res => {
        this.setState({
          error: `There was a problem deleting this post. Please try again later`
        });
      });
  };

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

    const { error } = this.state;
    return (
      <li>
        <div role="alert">{error && <p>{error}</p>}</div>
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
        {userCanEdit && (
          <button onClick={this.handleDeletePost}>Delete This Post</button>
        )}
      </li>
    );
  }
}
export default PostListItem;
