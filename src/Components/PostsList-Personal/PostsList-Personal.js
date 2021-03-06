import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostListItem from '../PostListItem/PostListItem';
import Spinner from '../Utils/Spinner/Spinner';
import AuthApiService from '../../services/auth-api-service';

import './PostsList-Personal.css';

class PostsListPersonal extends Component {
  state = {
    posts: [],
    error: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    AuthApiService.getAllPostsByUser()
      .then(posts => this.setState({ posts, loading: false }))
      .catch(res => {
        this.setState({ error: res.error, loading: false });
      });
  }

  deletePost = id => {
    const { posts } = this.state;
    const updatedPosts = posts.filter(p => p.id !== id);
    this.setState({
      posts: updatedPosts
    });
  };

  render() {
    const { posts, loading } = this.state;
    return (
      <>
        <section className="Results-Personal">
          <h2>My Posts</h2>
          <div role="alert">
            {this.state.error && <p>{this.state.error}</p>}
            {!posts.length && !loading && (
              <p className="empty-posts-msg">
                Could not find any posts. <br />
                <Link to="/new-post">Click Here</Link> to make a new post.
              </p>
            )}
          </div>
          <ul className="Results-Personal__list">
            {posts.map(post => (
              <PostListItem
                key={post.id}
                author_id={post.user_id}
                post_id={post.id}
                title={post.title}
                description={post.description}
                device={post.device}
                condition={post.condition}
                location={post.location}
                userCanEdit={post.userCanEdit}
                image_url={post.image_url}
                deletePost={this.deletePost}
              />
            ))}
          </ul>
          {loading && <Spinner />}
        </section>
      </>
    );
  }
}
export default PostsListPersonal;
