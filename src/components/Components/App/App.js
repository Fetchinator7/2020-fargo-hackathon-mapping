import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Nav from '../Nav/Nav';

import HomePage from '../../Pages/HomePage/HomePage';

import { variableNames } from '../../../variableNames';
const dispatches = variableNames.dispatches;
const LAUNCH = dispatches.standard.requests.try.LAUNCH;
const home = variableNames.routes.urls.home;

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: LAUNCH });
  }

  render() {
    return (
      <Router>
        <>
          <Nav />
          <Switch>
            <Redirect exact path='/' to='/home' />
            <Route
              exact
              path={home}
              component={HomePage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default connect()(App);
