import React, { Component } from 'react';
import Header from '../Components/Header';
import GameData from '../../datas/games.js';
import ShortId from 'shortid';
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
    const gameDescription = gameData[0].description.map((text) => {
      return (
        <p key={ShortId.generate()}>{text}</p>
      )
    });

    let gameScreenshot = [];
    for(let i = 1; i <= gameData[0].image_count; i++){
      const url = "../../datas/screenshot/"+gameData[0].id+"/"+i+".png";
      gameScreenshot.push(
        <img
          key={ShortId.generate()}
          src="http://i.imgur.com/nkij0zO.jpg">
        </img>
      );
    }

    if(gameData[0]){
      return (
        <div className="Game content-wrapper">
          <Header startY={50} />
          <div
            className="game-banner"
            style={{
              backgroundImage: 'url("http://i.imgur.com/ibzBYL8.jpg")',
              height: "350px"
            }}>
          </div>
          <div className="content">
            <div className="inline-section-wrapper">
              <div className="section">
                <h3 className="section-label">{gameData[0].name}</h3>
                {gameDescription}
              </div>
              <div className="section media-wrapper">
              <iframe
                className="media-container"
                frameBorder="0"
                src="https://www.youtube.com/embed/90ZN8GWfmL0">
              </iframe>
                {gameScreenshot}
              </div>
            </div>
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
