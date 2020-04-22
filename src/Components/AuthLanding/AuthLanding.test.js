import React from 'react';
import ReactDOM from 'react-dom';
import AuthLanding from './AuthLanding';

describe('Landing page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthLanding />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
