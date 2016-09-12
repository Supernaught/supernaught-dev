import React, { Component } from 'react';
import { Link } from 'react-router';
// import { browserHistory } from 'react-router';

class FeaturedGame extends Component {
  render() {
    const gameDetail = this.props.info;
    return (
      <li>
        <Link
          to={'/'+gameDetail.id}>
          {gameDetail.name}
        </Link>
      </li>
    );
  }
}

export default FeaturedGame;
