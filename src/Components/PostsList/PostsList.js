import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

import './PostsList.css';

class PostsList extends Component {
  state = {
    posts: [],
    error: null
  };

  componentDidMount() {
    AuthApiService.getAllPosts().then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    console.log(posts);
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Search">
          <h2>Search</h2>
          <form className="Search__form">
            <label htmlFor="search">Search</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="location">Location</label>
            <select id="location" name="location">
              <option value="ny">New York</option>
              <option value="nj">New Jersey</option>
              <option value="etc">Etc...</option>
            </select>
            <button type="submit">Search Now</button>
          </form>
        </section>
        <section className="Results">
          <h3>Results</h3>
          <ul className="Results__list">
            {posts.map(post => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <p>{post.device}</p>
                <p>{post.condition}</p>
                <p>{post.location}</p>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
export default PostsList;
