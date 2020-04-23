import React from 'react';
import ReactDOM from 'react-dom';
import MessagesList from './MessagesList';
import { MemoryRouter } from 'react-router-dom';

describe('MessagesList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <MessagesList />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
