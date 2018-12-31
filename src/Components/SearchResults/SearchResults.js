import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Grid from '../Grid/Grid';

class SearchResults extends Component {
  
  render() {
    const { addToPlaylist, results, addToCurrentPlaylist } = this.props;
    return(
      <Grid>
          <PlaylistDisplay playlists={results.playlists} addToCurrentPlaylist={addToCurrentPlaylist} />
          <TrackList trackList={results.tracks} trackAction={addToPlaylist} />
          <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={results.albums} albums />
      </Grid>
    );
  }
}



export default SearchResults;
