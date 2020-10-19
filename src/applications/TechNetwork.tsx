import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
// import './TechNetwork.css';
import { Dashboard } from '../components/Dashboard';
import '../assets/css/material-dashboard-react.css?v=1.9.0';
import { Provider } from 'react-redux';
import { store } from '../store';

const hist = createBrowserHistory();
const TechNetwork: React.FC = () => (
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
);

export default TechNetwork;
