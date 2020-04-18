import React from 'react';
import ReactDOM from 'react-dom';
import PostListItem from './PostListItem';
import { MemoryRouter } from 'react-router-dom';

describe('PostListItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PostListItem />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
