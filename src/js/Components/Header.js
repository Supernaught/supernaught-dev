import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.prevScroll = 0;
    this.state = {
      stickyTab: '',
      hideTab: ''
    };
  }
  componentDidMount(){
    if(this.props.startY > 0){
      window.addEventListener('scroll', this.handleScroll);
    }else{
      this.setState({ stickyTab: 'sticky' });
    }
  }
  componentWillUnmount(){
    if(this.props.startY > 0){
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  handleScroll(event){
    let scrollTop = event.srcElement.body.scrollTop;

    // Check if scrollY is in target sticky scrollY
    if(scrollTop >= this.props.startY){
      this.setState({ stickyTab: 'sticky' });
    } else{
      this.setState({ stickyTab: '' });
    }

    // Check if scrolling up or down
    if(this.state.stickyTab === 'sticky'){
      if(scrollTop > this.prevScroll){
        this.setState({ hideTab: 'hide-nav' });
      } else{
        this.setState({ hideTab: '' });
      }
    }

    // Check if scrollY is in the bottom page
    if((window.innerHeight + document.body.scrollTop) >=
        document.body.offsetHeight){
          this.setState({ hideTab: '' });
    }

    this.prevScroll = scrollTop;

  }
  render() {
    return (
      <header className={this.state.stickyTab+ ' ' +this.state.hideTab}>
        <div className="nav-container">
          <h3 className="header-title">Supernaught</h3>
          <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            <Link to="/about" activeClassName="active">About Supernaught</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
