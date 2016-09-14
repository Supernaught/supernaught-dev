import React, { Component } from 'react';
import Header from '../Components/Header';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="About page-component">
        <Header startY={0} />
        About Page
      </div>
    );
  }
}

export default About;
