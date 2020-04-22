import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLanding.css';
const AuthLanding = props => {
  return (
    <>
      <section className="Auth-Landing">
        <h2>Welcome to Re-connect!</h2>
        <p>
          Looking to post a new Device to donate?{' '}
          <Link to="/new-post">Click here to get started.</Link>
        </p>
        <p>
          Or maybe you're looking for a new device yourself?{' '}
          <Link to="/posts">Click here to start searching.</Link>
        </p>
      </section>
    </>
  );
};

export default AuthLanding;
