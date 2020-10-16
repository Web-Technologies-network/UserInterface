import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
// import './TechNetwork.css';
import { Dashboard } from '../components/Dashboard';
import '../assets/css/material-dashboard-react.css?v=1.9.0';

const hist = createBrowserHistory();
const TechNetwork: React.FC = () => (
  <Router history={hist}>
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  </Router>
);

export default TechNetwork;
