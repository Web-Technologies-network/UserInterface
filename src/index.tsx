import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TechNetwork from './applications/TechNetwork';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import './assets/css/material-dashboard-react.css?v=1.9.0';
import { Dashboard } from './components/Dashboard';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
