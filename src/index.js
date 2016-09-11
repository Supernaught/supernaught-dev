import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// components
import About from './js/Pages/About';
import Game from './js/Pages/Game';
import Home from './js/Pages/Home';
import Main from './js/Main';

// styles
import './styles/css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/:game" component={Game} />
    </Route>
  </Router>,
  document.getElementById('root')
);
