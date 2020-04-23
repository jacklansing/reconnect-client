import React from 'react';
import ReactDOM from 'react-dom';
import PostsListPersonal from './PostsList-Personal';
import { MemoryRouter } from 'react-router-dom';

describe('PostsListPersonal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PostsListPersonal />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
