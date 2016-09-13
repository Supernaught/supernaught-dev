import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      stickyTab: ''
    };
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event){
    let scrollTop = event.srcElement.body.scrollTop;
    if(scrollTop >= 600){
      this.setState({ stickyTab: 'sticky' });
    } else{
      this.setState({ stickyTab: '' });
    }
  }
  render() {
    return (
      <header className={this.state.stickyTab}>
        <nav className="nav-container">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/about" activeClassName="active">About Supernaught</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
