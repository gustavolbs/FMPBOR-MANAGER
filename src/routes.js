/**
 * Routes
 * File that routes every page on the app.
 *
 * Additional librarys:
 *  - React Router Dom
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

// import Main from './pages/Main';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Financial from './pages/Financial';
import Federation from './pages/Federation';
import Societies from './pages/Societies';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Main} /> */}
        <Route path="/" exact component={Login} />
        <Route path="/login/" component={Login} />

        <PrivateRoute path="/dashboard/" exact component={Dashboard} />
        <PrivateRoute path="/financial/" exact component={Financial} />
        <PrivateRoute path="/federation/" exact component={Federation} />
        <PrivateRoute path="/society/" exact component={Societies} />
        <PrivateRoute path="/profile/" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
