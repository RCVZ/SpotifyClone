import React from 'react';
import './SearchResults.css';

import Grid from '../Grid/Grid';

import ResultsTracklist from '../../Containers/ResultsTracklist/ResultsTracklist';
import Albumslist from '../../Containers/Albumslist/Albumslist';
import Artists from '../../Containers/Artists/Artists';
import Playlists from '../../Containers/Playlists/Playlists';

import { Switch, Route } from "react-router-dom";


const SearchResults = () => {
  return (
    <Grid>
      <Switch>
        <Route exact path="/search" render={(props) => (
          <>
          <Playlists key={1} {...props} />
          <ResultsTracklist key={2} {...props} />
          <Albumslist key={3} {...props} />
          <Artists key={4}  {...props} />
          </>)} 
        />
        <Route path="/search/no-results" render={() => <h1 style={{fontSize: '30px', marginTop: '30px'}}>No results</h1>} />
        <Route path="/search/playlists" render={(props) => <Playlists key={1} {...props} /> } />
        <Route path="/search/tracks" render={(props) => <ResultsTracklist key={2} {...props} /> } />
        <Route path="/search/albums" render={(props) => <Albumslist key={3} {...props} /> } />
        <Route path="/search/artists" render={(props) => <Artists key={4}  {...props} /> } />
      </Switch>
    </Grid>
  );
}


export default SearchResults;



  
  
  
