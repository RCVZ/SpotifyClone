import React from 'react';
import './SearchResults.css';

import Grid from '../Grid/Grid';

import { Switch, Route } from "react-router-dom";

const SearchResults = ({ children, route }) => {

  const renderThis = () => {
    {
      if (route === '/search') {
        return  children 
      } else if (route === '/search/playlists') {
        return  children[0]
      } else if (route === '/search/playlists') {
        return  children[1]
      } else if (route === '/search/tracks') {
        return  children[2]
      } else if (route === '/search/albums') {
        return  children[3]
      } else if (route === '/search/artists') {
        return  children[4]
      }
    }
  }

  return (
    <Grid>
      {renderThis()}
    </Grid>
  );
}


export default SearchResults;

{/* <Switch>
  <Route exact path="/search" render={() => children} />
  <Route path="/search/playlists" render={() => children[0]} />
  <Route path="/search/tracks" render={() => children[1]} />
  <Route path="/search/albums" render={() => children[2]} />
  <Route path="/search/artists" render={() => children[3]} />
</Switch> */}
