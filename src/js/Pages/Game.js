import React, { Component } from 'react';

class Game extends Component {
  render() {
    console.log(this.props.params.data);
    return (
      <div className="Game">
        Game Page {this.props.params.game}
      </div>
    );
  }
}

export default Game;
