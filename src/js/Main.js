import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

// assets
// import logo from '../styles/assets/logo.svg';

import '../styles/css/App.css';

class Main extends Component {
  render() {
    return (
      <div className="Home">
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/about" activeClassName="active">About</Link>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
