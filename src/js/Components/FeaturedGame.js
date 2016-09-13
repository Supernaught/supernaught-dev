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
        <a key={ShortId.generate()}>{category}</a>
      )
    });
    return (
      <li onClick={this.handleRedirect.bind(this)}>
        <h2>{this.props.data.name}</h2>
        {categories}
      </li>
    );
  }
}

export default FeaturedGame;
