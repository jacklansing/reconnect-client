import React from 'react';
import ReactDOM from 'react-dom';
import MessagesList from './MessagesList';

describe('MessagesList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessagesList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
