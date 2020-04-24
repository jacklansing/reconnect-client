import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
const Landing = props => {
  return (
    <>
      <section className="Info">
        <p>
          Have a bunch of old iPhones sitting in your drawer? Use Re-Connect to
          help give back to the community.
        </p>
        <p>Get started by signing up today.</p>
        <Link to="/sign-up">Sign Up Now</Link>
        <p className="Info__demo">
          Or log in to the Demo Account to try it out.
          <br />
          <span>User Name:</span> username (case sensitive)
          <br />
          <span>Password:</span> Password123! (case sensitive)
        </p>
      </section>
    </>
  );
};

export default Landing;
