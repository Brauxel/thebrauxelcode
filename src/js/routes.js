import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import Home from './containers/Home';

const Routes = () => {
  return (
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
  )
};

export default Routes;