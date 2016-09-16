import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import About from './js/Pages/About';
import Game from './js/Pages/Game';
import Home from './js/Pages/Home';
import Main from './js/Main';

// styles
import './styles/css/index.css';

// Google Analytics
var ReactGA = require('react-ga');
ReactGA.initialize('UA-84298907-1');

function logPageView() {
	ReactGA.set({ page: window.location.pathname })
	ReactGA.pageview(window.location.pathname)
}

ReactDOM.render(
  <Router history={browserHistory} onUpdate={logPageView} >
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/:game" component={Game} />
    </Route>
  </Router>,
  document.getElementById('root')
);