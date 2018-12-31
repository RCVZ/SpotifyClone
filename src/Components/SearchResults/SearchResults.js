import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import ResultContainer from '../ResultContainer/ResultContainer';

class SearchResults extends Component {
  
  render() {
    const { addToPlaylist, results, addToCurrentPlaylist } = this.props;
    return(
      <ResultContainer>
          <PlaylistDisplay playlists={results.playlists} addToCurrentPlaylist={addToCurrentPlaylist} />
          <TrackList trackList={results.tracks} trackAction={addToPlaylist} />
          <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={results.albums} albums />
      </ResultContainer>
    );
  }
}



export default SearchResults;
