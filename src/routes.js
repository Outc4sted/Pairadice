import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';


const {
  PairadicePage,
  HighScoresPage,
  NotFoundPage,
} = containers;


export default (
  <Route component={App}>
    <Route path="/" component={PairadicePage} />
    <Route path="/highscores" component={HighScoresPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
