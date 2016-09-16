import React, { Component } from 'react';
import { Link } from 'react-router';
import ShortId from 'shortid';

class FeaturedGame extends Component {
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
      <Link
        className="featured-game"
        to={"/"+this.props.data.id}
        style={{backgroundImage: 'url("http://i.imgur.com/ItnrXPm.png")'}}
        onTouchStart="">
        <h2 className="thumbnail-title">{this.props.data.name}</h2>
        <div className="thumbnail-category">{categories}</div>
        <div className="thumbnail-platform">{platforms}</div>
      </Link>
    );
  }
}

export default FeaturedGame;
