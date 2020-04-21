import React, { Component } from 'react';
import PostForm from '../PostForm/PostForm';
import AuthApiService from '../../services/auth-api-service';

class NewPostForm extends Component {
  render() {
    return (
      <PostForm
        location={this.props.location}
        history={this.props.history}
        onSubmit={AuthApiService.postDevice}
        redirectAfterSubmit={'/my-posts'}
        buttonText={'New Post'}
      />
    );
  }
}
export default NewPostForm;
