import React, { Component } from 'react';
import PostForm from '../PostForm/PostForm';
import AuthApiService from '../../services/auth-api-service';

class EditPostForm extends Component {
  render() {
    return (
      <PostForm
        location={this.props.location}
        history={this.props.history}
        onSubmit={AuthApiService.updateDevice}
        redirectAfterSubmit={'/my-posts'}
        buttonText={'Update Post'}
        formHeader={'Update Post'}
      />
    );
  }
}
export default EditPostForm;
