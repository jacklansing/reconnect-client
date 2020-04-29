import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import postImage from '../../images/post.PNG';
import searchImage from '../../images/search.PNG';
import discussImage from '../../images/discuss.PNG';
const Landing = props => {
  return (
    <>
      <section className="Info">
        <div className="Info__intro">
          <p>
            Have a bunch of old phones sitting in your drawer? Use Re-Connect to
            help give back to your community.
          </p>
          <p>Get started by signing up today.</p>
          <Link to="/sign-up">Sign Up Now</Link>
          <p className="Info__demo">
            Or <Link to="/login">log in</Link> to the Demo Account to try it
            out.
            <br />
            <span>User Name:</span> username (case sensitive)
            <br />
            <span>Password:</span> Password123! (case sensitive)
          </p>
        </div>
        <div className="Info__blurb-title">
          <h2>How it works</h2>
        </div>
        <div className="Info__blurb">
          <h2>Post.</h2>
          <p>Used devices you're willing to donate.</p>
          <img
            className="Info__image"
            alt="a screenshot of a new device being posted"
            src={postImage}
          />
        </div>
        <div className="Info__blurb">
          <h2>Search.</h2>
          <p>To find device(s) you're in need of.</p>
          <img
            className="Info__image"
            alt="a screenshot of a new device being posted"
            src={searchImage}
          />
        </div>
        <div className="Info__blurb">
          <h2>Discuss.</h2>
          <p>Getting the device from the donor.</p>
          <img
            className="Info__image"
            alt="a screenshot of a new device being posted"
            src={discussImage}
          />
        </div>
        <div className="Info__blurb">
          <h2>Sound good?</h2>
          <p>Get started by signing up today.</p>
          <Link to="/sign-up">Sign Up Now</Link>
        </div>
      </section>
    </>
  );
};

export default Landing;
