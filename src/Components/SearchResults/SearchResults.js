import React from 'react';
import './SearchResults.css';

import Grid from '../Grid/Grid';

import { Switch, Route, withRouter } from "react-router-dom";

const SearchResults = ({ children }) => {
  return (
    <Grid>
      <Switch>
        <Route exact path="/search" render={() => (<React.Fragment>{children}</React.Fragment>)} />
        <Route path="/search/playlists" render={() => (<React.Fragment>{children[0]}</React.Fragment>)} />
        <Route path="/search/tracks" render={() => (<React.Fragment>{children[1]}</React.Fragment>)} />
        <Route path="/search/albums" render={() => (<React.Fragment>{children[2]}</React.Fragment>)} />
        <Route path="/search/artists" render={() => (<React.Fragment>{children[3]}</React.Fragment>)} />
      </Switch>
    </Grid>
  );
}


export default SearchResults;
