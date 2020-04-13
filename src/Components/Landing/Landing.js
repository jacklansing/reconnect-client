import React from 'react';
import './Landing.css';
const Landing = props => {
  return (
    <>
      <header role="banner" className="Hero">
        <h1>Re-Connect</h1>
      </header>
      <section className="Info">
        <p>
          Got a bunch of old iPhones sitting in your drawer? Use Re-Connect to
          help give back to the community.
        </p>
        <p>Get started today by signing up.</p>
        <a href="#">Sign Up Now</a>
      </section>
    </>
  );
};

export default Landing;
