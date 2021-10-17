import React, { Fragment } from 'react';
import '../css/Landing.css';
import LoginButton from './LoginButton';

function Landing() {
  return (
    <Fragment>
      <div id="landing-wrapper">
        <section className="main">
          <div className="content">
            <div className="first">
              <div className="text">
                <div>
                  <h3>General Store</h3>
                </div>
                <div>
                  <h1>ApniDukaan</h1>
                  <p></p>
                  <h2>get everything you need at your doorstep !</h2>
                  <div className="btn">
                    <LoginButton type="seller" buttonText="Seller Sign In" />
                    &emsp; &emsp; &emsp;
                    <LoginButton type="buyer" buttonText="Buyer Sign In" />
                  </div>
                </div>
              </div>
            </div>
            <div className="second">
              <div className="image"></div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Landing;
