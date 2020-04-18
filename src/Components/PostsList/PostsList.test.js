import React from 'react';
import ReactDOM from 'react-dom';
import PostsList from './PostsList';

describe('PostsList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
