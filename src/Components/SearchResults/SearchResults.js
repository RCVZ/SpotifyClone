import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Grid from '../Grid/Grid';

class SearchResults extends Component {
  
  render() {
    const { addToPlaylist, results, addToCurrentPlaylist, children } = this.props;
    return(
      <Grid>
        {children}
      </Grid>
    );
  }
}



export default SearchResults;
