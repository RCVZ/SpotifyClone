import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import ResultContainer from '../ResultContainer/ResultContainer';
import ResultSubContainer from '../ResultSubContainer/ResultSubContainer';

class SearchResults extends Component {
  
  render() {
    console.log("results: ", this.props.results);
    const { addToPlaylist, results, addToCurrentPlaylist } = this.props;
    return(
      <ResultContainer>
        <ResultSubContainer>
          <PlaylistDisplay playlists={results.playlists} addToCurrentPlaylist={addToCurrentPlaylist} />
        </ResultSubContainer>
        <ResultSubContainer>
          <TrackList
            trackList={results.tracks}
            addToPlaylist={addToPlaylist}
          />
        </ResultSubContainer>
        <ResultSubContainer>
          <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={results.albums} albums />
        </ResultSubContainer>
      </ResultContainer>
    );
  }
}



export default SearchResults;
