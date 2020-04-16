import React, { Component } from 'react';
import PostListItem from '../PostListItem/PostListItem';
import AuthApiService from '../../services/auth-api-service';

import './PostsList.css';

class PostsList extends Component {
  state = {
    posts: [],
    error: null,
    search: '',
    location: 'Albany, NY'
  };

  componentDidMount() {
    AuthApiService.getAllPosts()
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

  handleSubmit = e => {
    e.preventDefault();

    const params = [];

    if (this.state.search) {
      params.push(`search=${this.state.search}`);
    }

    if (this.state.location) {
      params.push(`location=${this.state.location}`);
    }

    const queryParams = params.join('&');

    AuthApiService.getSearchPosts(queryParams)
      .then(posts => this.setState({ posts }))
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  setSearch(search) {
    this.setState({
      search
    });
  }

  setLocation(location) {
    this.setState({
      location
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Search">
          <h2>Search</h2>
          <form className="Search__form" onSubmit={this.handleSubmit}>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.search}
              onChange={e => this.setSearch(e.target.value)}
            />
            <label htmlFor="location">Location</label>
            <select
              id="location"
              name="location"
              value={this.state.location}
              onChange={e => this.setLocation(e.target.value)}
            >
              <option value="">All</option>
              <option value="Albany, NY" default>
                Albany, NY
              </option>
              <option value="Schenectady, NY">Schenectady, NY</option>
            </select>
            <button type="submit">Search Now</button>
          </form>
        </section>
        <section className="Results">
          <h3>Results</h3>
          <div role="alert">
            {this.state.error && <p>{this.state.error}</p>}
          </div>
          <ul className="Results__list">
            {posts.map(post => (
              <PostListItem
                key={post.id}
                post_id={post.id}
                author_id={post.user_id}
                author_name={post.post_author}
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
export default PostsList;
