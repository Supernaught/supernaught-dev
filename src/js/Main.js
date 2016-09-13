import React, { Component } from 'react';
import Footer from './Components/Footer';
import 'mdi';
import '../styles/css/Main.css';

class Main extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
