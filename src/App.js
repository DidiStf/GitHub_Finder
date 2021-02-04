import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './views/User';
import About from './views/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './views/Home';
import NotFound from './views/NotFound';

import './App.css';

const App = () => (
  <GithubState>
    <AlertState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  </GithubState>
);

export default App;
