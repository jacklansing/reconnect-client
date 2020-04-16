import React, { Component } from 'react';
import PostListItem from '../PostListItem/PostListItem';
import AuthApiService from '../../services/auth-api-service';

import './PostsList-Personal.css';

class PostsListPersonal extends Component {
  state = {
    posts: [],
    error: null
  };

  componentDidMount() {
    AuthApiService.getAllPostsByUser()
      .then(posts => this.setState({ posts }))
      .catch(res => {
        this.setState({ error: res.error });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Results">
          <h3>Results</h3>
          <div role="alert">
            {this.state.error && <p>{this.state.error}</p>}
          </div>
          <ul className="Results__list">
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
              />
            ))}
          </ul>
        </section>
      </>
    );
  }
}
export default PostsListPersonal;