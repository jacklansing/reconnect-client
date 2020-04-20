import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DeleteButton } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import './PostListItem.css';

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
      <li className="Results__list-item">
        <div role="alert">{error && <p>{error}</p>}</div>
        <h4>{title}</h4>
        {author_name && (
          <p className="post-author">
            <span>posted by</span> {author_name}
          </p>
        )}
        <p className="post-description">{description}</p>
        <p className="post-device">
          <span>Device Type:</span> {device}
        </p>
        <p className="post-condition">
          <span>Condition: </span>
          {condition[0].toUpperCase() + condition.slice(1)}
        </p>
        <p className="post-location">
          <span>Location:</span> {location}
        </p>
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
          <DeleteButton className="delete" onClick={this.handleDeletePost}>
            Delete This Post
          </DeleteButton>
        )}
      </li>
    );
  }
}
export default PostListItem;
