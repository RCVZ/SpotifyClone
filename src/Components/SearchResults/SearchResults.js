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
          <div className="Tracklist" >
            <div className="Tracklist-tracks">
              <TrackList
                trackList={results.tracks}
                addToPlaylist={addToPlaylist}
              />
            </div>
            <div className="Tracklist-albums" >
              <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={results.albums} albums />
            </div>
          </div>
      </ResultContainer>
    );
  }
}



export default SearchResults;
