import React, { Component } from 'react';

class PostListItem extends Component {
  state = {
    author_id: this.props.id
  };

  render() {
    return (
      <li>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <p>{this.props.device}</p>
        <p>{this.props.condition}</p>
        <p>{this.props.location}</p>
      </li>
    );
  }
}
export default PostListItem;
