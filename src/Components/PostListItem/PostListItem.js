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
      userCanEdit,
      image_url
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
        {this.props.image_url ? (
          <img
            className="post-image"
            src={this.props.image_url}
            alt="device posted by user"
          />
        ) : null}
        <p className="post-description">{description}</p>
        <p className="post-device">
          <span>Device Type:</span> {device}
        </p>
        <p className="post-condition">
          <span>Condition: </span>
          {condition ? condition[0].toUpperCase() + condition.slice(1) : null}
        </p>
        <p className="post-location">
          <span>Location:</span> {location}
        </p>
        {!userCanEdit && (
          <p>
            <Link
              to={{
                pathname: '/new-message',
                state: { author_id }
              }}
            >
              Send Message
            </Link>
          </p>
        )}
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
                  location,
                  image_url
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
