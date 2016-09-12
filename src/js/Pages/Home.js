import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import '../../styles/css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    const data = [
      {
        id: 'mono',
        name: 'Mono'
      },
      {
        id: 'hammerfall',
        name: 'Hammerfall'
      },
      {
        id: 'grimlocks-lair',
        name: 'Grimlock Lair'
      },
      {
        id: 'adrift',
        name: 'Adrift'
      },
      {
        id: 'pong-knights',
        name: 'Pong Knights'
      },
      {
        id: 'blockade-arcade',
        name: 'Blockade Arcade'
      },
      {
        id: 'necromorph',
        name: 'Necromorph'
      },
      {
        id: 'jumpr',
        name: 'Jumpr'
      }
    ];

    this.setState({games: data});
  }

  render() {
    const shortid = require('shortid');
    const gameList = this.state.games.map((game) => {
      return (
        <li key={shortid.generate()}>
          <Link
            to={'/'+game.id}>
            {game.name}
          </Link>
        </li>
      )
    });
    return (
      <div className="Home content-wrapper">
        <div
          className="banner-wrapper"
          style={{backgroundImage: 'url("")'}}>
          <h1 className="title">Supernaught</h1>
          <span className="motto">We make games for fun</span>
        </div>
        <div className="content">
          <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            <Link to="/about" activeClassName="active">About</Link>
          </nav>
          Home Page
          <ul>
            {gameList}
          </ul>
          <h3 className="section-label">And few other games...</h3>
          <ul className="game-list">
            {gameList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
