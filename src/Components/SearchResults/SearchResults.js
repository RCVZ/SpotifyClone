import React from 'react';
import './SearchResults.css';

import Grid from '../Grid/Grid';

import { Switch, Route } from "react-router-dom";

const SearchResults = ({ children }) => {
  return (
    <Grid>
      <Switch>
        <Route exact path="/search" render={() => children} />
        <Route path="/search/playlists" render={() => children[0]} />
        <Route path="/search/tracks" render={() => children[1]} />
        <Route path="/search/albums" render={() => children[2]} />
        <Route path="/search/artists" render={() => children[3]} />
      </Switch>
    </Grid>
  );
}


export default SearchResults;
