import React, { Component } from 'react';
import { Link } from 'react-router';
import ShortId from 'shortid';
import GameData from '../../datas/games.js';
import Header from '../Components/Header';
import FeaturedGame from '../Components/FeaturedGame';
import '../../styles/css/Home.css';
import '../../styles/css/Header.css';

class Home extends Component {
  render() {
    const gameDataList = GameData.games.gameList;

    // Filter games between 'featured' and 'others'
    const featuredGames = gameDataList.filter((game) => {
      return (game.featured === 1)? true : false;
    });

    const otherGames = gameDataList.filter((game) => {
      return (game.featured === 0)? true : false;
    });

    // Create Component for each filtered list
    const featuredGameList = featuredGames.map((game) => {
      return (
        <FeaturedGame key={ShortId.generate()} data={game} />
      )
    });

    const otherGameList = otherGames.map((game) => {
      return (
        <li key={ShortId.generate()}>
          <Link to={'/'+game.id}>{game.name}</Link>
        </li>
      )
    });

    return (
      <div className="Home content-wrapper">
        <div
          className="banner-wrapper"
          style={{
            backgroundImage: 'url("http://i.imgur.com/ItnrXPm.png")',
            height: "600px"
          }}>
          <h1 className="title">Supernaught</h1>
          <span className="banner-text">We make games for fun</span>
        </div>
        <Header
          startBelow={true}
          startPin={600}/>
        <div className="content">
          <div className="section-wrapper">
            <h3 className="section-label">Our games</h3>
            <ul className="featured-game-list">
              {featuredGameList}
            </ul>
          </div>
          <div className="section-wrapper">
            <h3 className="section-label">And few others...</h3>
            <ul className="game-list">
              {otherGameList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
