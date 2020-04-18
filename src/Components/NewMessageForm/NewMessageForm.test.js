import React from 'react';
import ReactDOM from 'react-dom';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewMessageForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
