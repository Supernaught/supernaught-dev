import React, { Component } from 'react';
import { Link } from 'react-router';
import ShortId from 'shortid';

class FeaturedGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailImage: 'http://i.imgur.com/ItnrXPm.png'
    };
  }
  handleHoverIn(){
    this.setState({
      thumbnailImage: 'http://i.imgur.com/5EURwZP.gif'
    });
  }
  handleHoverOut(){
    this.setState({
      thumbnailImage: 'http://i.imgur.com/ItnrXPm.png'
    });
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
    const style = {
      backgroundImage: 'url('+this.state.thumbnailImage+')'
    }
    return (
      <Link
        className="featured-game"
        to={"/"+this.props.data.id}
        style={style}
        onMouseOver={()=>this.handleHoverIn()}
        onMouseOut={()=>this.handleHoverOut()}>
        <h2 className="thumbnail-title">{this.props.data.name}</h2>
        <div className="thumbnail-category">{categories}</div>
        <div className="thumbnail-platform">{platforms}</div>
      </Link>
    );
  }
}

export default FeaturedGame;
