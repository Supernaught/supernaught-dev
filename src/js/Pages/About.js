import React, { Component } from 'react';
import Header from '../Components/Header';
import '../../styles/css/About.css';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="About content-wrapper">
        <Header startY={30} />
        <div
          className="banner-wrapper"
          style={{
            backgroundImage: 'url("http://i.imgur.com/ibzBYL8.jpg")',
            height: "250px"
          }}>
          <span className="banner-text">can a squirrel fly next to a bald eagle?</span>
        </div>
        <div className="content about-content">
          <h3 className="section-label">
            About Supernaught...
          </h3>
          <p>
            Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <span className="icon-wrapper">
            <a
              className="facebook-icon footer-icon mdi mdi-facebook"
              href="https://www.facebook.com/Supernaught-667388713322929/"
              target="*">
            </a>
            <a
              className="twitter-icon footer-icon mdi mdi-twitter"
              href="https://twitter.com/_supernaught"
              target="*">
            </a>
            <a
              className="github-icon footer-icon mdi mdi-github-circle"
              href="https://github.com/Supernaught"
              target="*">
            </a>
          </span>
          <h3 className="section-label">Who are they?</h3>
        </div>
      </div>
    );
  }
}

export default About;
