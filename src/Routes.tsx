import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Dashboard from 'containers/DashboardContainer/DashboardContainer';
import App from 'App';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/app" component={App} />
  </Switch>
);

export default Routes;
