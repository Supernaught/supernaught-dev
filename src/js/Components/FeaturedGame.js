import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ShortId from 'shortid';

class FeaturedGame extends Component {
  handleRedirect(){
    const route = String('/'+this.props.data.id)
    browserHistory.push(route);
  }
  render() {
    const categories = this.props.data.categories.map((category) => {
      return (
        <span key={ShortId.generate()}>{category}</span>
      )
    });
    const platforms = this.props.data.platforms.map((platform) => {
      return (
        <i className={"mdi mdi-"+platform} key={ShortId.generate()}/>
      )
    });
    return (
      <li className="featured-game" onClick={this.handleRedirect.bind(this)}>
        <h2 className="thumbnail-title">{this.props.data.name}</h2>
        <div className="thumbnail-category">{categories}</div>
        <div className="thumbnail-platform">{platforms}</div>
      </li>
    );
  }
}

export default FeaturedGame;
