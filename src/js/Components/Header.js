import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import HeadRoom from 'react-headroom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event){
    // Check if scrollY is in the bottom page
    if((window.innerHeight + document.body.scrollTop) >=
        document.body.offsetHeight){
      console.log("Bottom");
    } else{
      // console.log("Not Bottom");
    }
  }
  render() {
    const startPin = (this.props.startPin === undefined) ? 0 : this.props.startPin;
    const startBelow = (!this.props.startBelow) ? '' : 'start-below'
    return (
      <HeadRoom pinStart={startPin}>
        <header className={startBelow}>
          <div className="nav-container">
            <h3 className="header-title">Supernaught</h3>
            <nav>
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
              <Link to="/about" activeClassName="active">About</Link>
            </nav>
          </div>
        </header>
    </HeadRoom>
    );
  }
}

export default Header;
