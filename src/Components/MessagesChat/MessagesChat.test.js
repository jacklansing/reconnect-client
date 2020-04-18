import React from 'react';
import ReactDOM from 'react-dom';
import MessagesChat from './MessagesChat';

describe('MessagesChat', () => {
  it('renders without crashing', () => {
    const location = {
      state: {}
    };
    const div = document.createElement('div');
    ReactDOM.render(<MessagesChat location={location} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
