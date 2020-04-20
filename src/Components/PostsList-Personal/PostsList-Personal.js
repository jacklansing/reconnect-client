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

  deletePost = id => {
    const { posts } = this.state;
    const updatedPosts = posts.filter(p => p.id !== id);
    this.setState({
      posts: updatedPosts
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <section className="Results-Personal">
          <h3>My Posts</h3>
          <div role="alert">
            {this.state.error && <p>{this.state.error}</p>}
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
                deletePost={this.deletePost}
              />
            ))}
          </ul>
        </section>
      </>
    );
  }
}
export default PostsListPersonal;
