import React, { Component } from 'react';

class NewMessageForm extends Component {
  render() {
    console.log(this.props.location.state.author_id);
    return (
      <>
        <header role="banner" className="Hero">
          <h1>Re-Connect</h1>
        </header>
        <section className="Message">
          <form className="Message__form">
            <h2>New Message</h2>
            <label htmlFor="message">New message to Bobby :</label>
            <textarea
              id="message"
              name="message"
              rows="10"
              cols="50"
            ></textarea>
            <input type="submit" />
            <button>Cancel</button>
          </form>
        </section>
      </>
    );
  }
}
export default NewMessageForm;
