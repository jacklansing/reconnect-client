import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

describe('Login', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
