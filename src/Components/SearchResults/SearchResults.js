import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import ResultContainer from '../ResultContainer/ResultContainer';
import ResultSubContainer from '../ResultSubContainer/ResultSubContainer';

class SearchResults extends Component {
  
  render() {
    const { addToPlaylist, results, addToCurrentPlaylist } = this.props;
    return(
      <ResultContainer>
        {this.props.results.playlists.length > 0 ?
         <React.Fragment>
            <PlaylistDisplay playlists={results.playlists} addToCurrentPlaylist={addToCurrentPlaylist} />
              <ResultSubContainer>
                <TrackList
                  trackList={results.tracks}
                  addToPlaylist={addToPlaylist} />
              </ResultSubContainer> 
              <ResultSubContainer> 
                <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={results.albums} albums />
              </ResultSubContainer>
          </React.Fragment>   :
          <h1>No results</h1>
               
        }
      </ResultContainer>
    );
  }
}



export default SearchResults;
