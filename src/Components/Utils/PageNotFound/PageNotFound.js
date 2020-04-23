import React from 'react';
import './PageNotFound.css';

const PageNotFound = props => {
  return (
    <section className="PageNotFound">
      <h2>404 Page Not Found</h2>
      <p>
        We could not find a page at this address. Please try navigating to a
        different page.
      </p>
    </section>
  );
};

export default PageNotFound;
