import React, { Component } from 'react';

class PostListItem extends Component {
  handleSendMessage = () => {
    console.log(this.props.author_id);
  };

  render() {
    return (
      <li>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <p>{this.props.device}</p>
        <p>{this.props.condition}</p>
        <p>{this.props.location}</p>
        <button onClick={this.handleSendMessage}>Send Message</button>
      </li>
    );
  }
}
export default PostListItem;
