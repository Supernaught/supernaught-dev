import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="About page-component">
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/about" activeClassName="active">About</Link>
        </nav>
        About Page
      </div>
    );
  }
}

export default About;
