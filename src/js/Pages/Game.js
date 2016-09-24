import React, { Component } from 'react';
import Header from '../Components/Header';
import GameData from '../../datas/games.js';
import { browserHistory } from 'react-router';
import '../../styles/css/Game.css';

class Game extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    const gameData = getGame(this.props.params.game);

    // If gameData is not found in games.js then redirect
    if(gameData.length <= 0){
      browserHistory.push('/');
    }
  }

  render() {
    const gameData = getGame(this.props.params.game);

    if(gameData[0]){
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
    } else{
      return null;
    }
  }
}

export default Game;

function getGame(id){
  const gameData = GameData.games.gameList.filter((element) => {
    return (element.id === id) ? true : false;
  });
  return gameData;
}
