import React from 'react';
import ReactDOM from 'react-dom';
import PostsListPersonal from './PostsList-Personal';

describe('PostsListPersonal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsListPersonal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
