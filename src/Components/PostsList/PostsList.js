import React, { Component } from 'react';
import './PostsList.css';

class PostsList extends Component {
  render() {
    return (
      <>
        <header role="banner" class="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section class="Search">
          <h2>Search</h2>
          <form class="Search__form">
            <label for="search">Search</label>
            <input type="text" id="name" name="name" />
            <label for="location">Location</label>
            <select id="location" name="location">
              <option value="ny">New York</option>
              <option value="nj">New Jersey</option>
              <option value="etc">Etc...</option>
            </select>
            <button type="submit">Search Now</button>
          </form>
        </section>
        <section class="Results">
          <h3>Results</h3>
          <ul class="Results__list">
            <li>
              <h4>Result Name</h4>
              <p>Result description</p>
              <p>Device Type</p>
              <p>Condition</p>
              <button>Send Message</button>
            </li>
            <li>
              <h4>Result Name</h4>
              <p>Result description</p>
              <p>Device Type</p>
              <p>Condition</p>
              <button>Send Message</button>
            </li>
          </ul>
        </section>
      </>
    );
  }
}
export default PostsList;
