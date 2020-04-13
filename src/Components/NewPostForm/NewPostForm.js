import React, { Component } from 'react';
import './NewPostForm.css';

class NewPostForm extends Component {
  render() {
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="New-Post">
          <h2>New Post</h2>
          <form className="New-Post__form">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="desc">Description</label>
            <textarea id="desc" name="desc"></textarea>
            <label htmlFor="device">Device Type</label>
            <select name="device" id="device">
              <option value="android" default>
                Android
              </option>
              <option value="iphone">iPhone</option>
              <option value="windows">Windows</option>
              <option value="mac">Macbook</option>
            </select>
            <label htmlFor="condition">Condition</label>
            <select name="condition" id="condition">
              <option value="Good" default>
                Very Good
              </option>
              <option value="Good">Good</option>
              <option value="Good">Okay</option>
              <option value="Good">Bad</option>
            </select>
            <label htmlFor="location">Location</label>
            <select id="location" name="location">
              <option value="ny">New York</option>
              <option value="nj">New Jersey</option>
              <option value="etc">Etc...</option>
            </select>
            <input type="submit" />
          </form>
        </section>
      </>
    );
  }
}
export default NewPostForm;
