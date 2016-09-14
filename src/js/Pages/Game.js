import React, { Component } from 'react';
import Header from '../Components/Header';

class Game extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Game page-component">
        <Header startY={0} />
        Game Page {this.props.params.game}
      </div>
    );
  }
}

export default Game;
