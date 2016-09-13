import React, { Component } from 'react';
import Footer from './Components/Footer';
import ScrollReveal from 'scrollreveal'
import 'mdi';
import '../styles/css/Main.css';

class Main extends Component {
  componentDidMount(){
    window.sr = ScrollReveal(( {
        duration: 500,
        scale: 0
      } )
    ).reveal('.title, .motto, .featured-game, .section-label, .game-list > li');
    window.sr.reveal('.game-list > li', { duration: 1000 }, 50);
  }
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
