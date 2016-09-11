import React, { Component } from 'react';
import { Link } from 'react-router';

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
      <div className="Home">
        Home Page
        <ul>
          {gameList}
        </ul>
      </div>
    );
  }
}

export default Home;
