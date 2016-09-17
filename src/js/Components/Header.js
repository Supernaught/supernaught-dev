import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.prevScroll = 0;
    this.checkScroll = true;
    this.state = {
      stickyTab: '',
      hideTab: ''
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

    // Check if scrollY is in target sticky scrollY
    if(scrollTop >= this.props.startY){
      this.setState({ stickyTab: 'sticky' });
    } else{
      this.setState({ stickyTab: '' });
    }

    // Check if scrolling up or down
    if(this.checkScroll){
      this.checkScroll = false;
      if(this.state.stickyTab === 'sticky'){
        if(scrollTop > this.prevScroll || scrollTop <= this.props.startY){
          this.setState({ hideTab: 'hide-nav' });
        } else{
          this.setState({ hideTab: '' });
        }
      }
      setTimeout(()=>{
        this.checkScroll = true;
      },300);
    }

    // Check if scrollY is in the bottom page
    if((window.innerHeight + document.body.scrollTop) >=
        document.body.offsetHeight){
          this.setState({ hideTab: '' });
    }

    this.prevScroll = scrollTop;

  }
  render() {
    const startBelow = (!this.props.startBelow) ? '' : 'start-below'
    return (
      <header className={this.state.stickyTab+ ' ' +this.state.hideTab+ ' ' +
                         startBelow}>
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
