import { Route, Switch } from 'react-router-dom';
import AllMeetups from './page/AllMeetups';
import NewMeetups from './page/NewMeetups';
import Favorite from './page/Favorite';
import Layout from './components/layout/Layout';

import React from 'react';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetups />
        </Route>
        <Route path="/favorites">
          <Favorite />
        </Route>
      </Switch>
    </Layout>
  );
}
