import { Route, Switch } from 'react-router-dom';
import AllMeetups from './page/AllMeetups';
import NewMeetups from './page/NewMeetups';
import Favorite from './page/Favorite';

import React from 'react';

export default function App() {
  return (
    <div>
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
    </div>
  );
}
