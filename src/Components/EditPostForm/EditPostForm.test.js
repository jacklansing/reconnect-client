import React from 'react';
import ReactDOM from 'react-dom';
import EditPostForm from './EditPostForm';

describe('Edit Post Form', () => {
  it('renders without crashing', () => {
    const location = {
      postProps: {}
    };
    const div = document.createElement('div');
    ReactDOM.render(<EditPostForm location={location} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
