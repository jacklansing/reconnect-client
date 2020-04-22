import React from 'react';
import ReactDOM from 'react-dom';
import AuthLanding from './AuthLanding';
import { MemoryRouter } from 'react-router-dom';
describe('Landing page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <AuthLanding />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
