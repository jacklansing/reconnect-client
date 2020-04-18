import React from 'react';
import ReactDOM from 'react-dom';
import NewPostForm from './NewPostForm';

describe('NewPostForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewPostForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
