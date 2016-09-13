import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Game extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Game page-component">
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/about" activeClassName="active">About</Link>
        </nav>
        Game Page {this.props.params.game}
      </div>
    );
  }
}

export default Game;
