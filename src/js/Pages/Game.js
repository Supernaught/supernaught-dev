import React, { Component } from 'react';
import Header from '../Components/Header';
import GameData from '../../datas/games.js';

class Game extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    // const gameDataList = GameData.games;
    // const name = gameDataList.featured.filter((element) => {
    //   return (element.id === this.props.params.game) ? true : false;
    // });
    // console.log(name[0]);
  }
  render() {
    const gameData = GameData.games.gameList.filter((element) => {
      return (element.id === this.props.params.game) ? true : false;
    });

    console.log(gameData[0]);

    return (
      <div className="Game page-component">
        <Header startY={50} />
        <div
          className="banner-wrapper"
          style={{
            backgroundImage: 'url("http://i.imgur.com/ibzBYL8.jpg")',
            height: "350px"
          }}>
          <h1 className="title">{gameData[0].name}</h1>
        </div>
      </div>
    );
  }
}

export default Game;
