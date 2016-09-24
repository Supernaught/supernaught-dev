import React, { Component } from 'react';
import Header from '../Components/Header';
import GameData from '../../datas/games.js';

class Game extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    window.scrollTo(0, 0);

    // const gameDataList = GameData.games;
    // const name = gameDataList.featured.filter((element) => {
    //   return (element.id === this.props.params.game) ? true : false;
    // });
    // console.log(name[0]);
  }
  render() {
    return (
      <div className="Game page-component">
        <Header startY={50} />
        <div
          className="banner-wrapper"
          style={{
            backgroundImage: 'url("http://i.imgur.com/ibzBYL8.jpg")',
            height: "350px"
          }}>
          <h1 className="title">{this.props.params.game}</h1>
        </div>
      </div>
    );
  }
}

export default Game;
