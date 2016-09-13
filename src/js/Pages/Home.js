import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import ShortId from 'shortid';
import GameData from '../../datas/games.js';
import FeaturedGame from '../Components/FeaturedGame';
import '../../styles/css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  render() {
    const gameDataList = GameData.games;
    const featuredGameList = gameDataList.featured.map((game) => {
      return (
        <FeaturedGame key={ShortId.generate()} data={game} />
      )
    });

    const otherList = gameDataList.other.map((game) => {
      return (
        <li key={ShortId.generate()}>
          <Link to={'/'+game.id}>{game.name}</Link>
        </li>
      )
    });

    return (
      <div className="Home content-wrapper">
        <nav>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/about" activeClassName="active">About</Link>
        </nav>
        <div
          className="banner-wrapper"
          style={{backgroundImage: 'url("")'}}>
          <h1 className="title">Supernaught</h1>
          <span className="motto">We make games for fun</span>
        </div>
        <div className="content">
          <div className="section-wrapper">
            <div className="team-summary-wrapper">
              Short summary
            </div>
          </div>
          <div className="section-wrapper">
            <ul className="featured-game-list">
              {featuredGameList}
            </ul>
          </div>
          <div className="section-wrapper">
            <h3 className="section-label">And few other games...</h3>
            <ul className="game-list">
              {otherList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
