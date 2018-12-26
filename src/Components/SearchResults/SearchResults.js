import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';

class SearchResults extends Component {
  
  render() {
    const { addToPlaylist, results, addToCurrentPlaylist } = this.props;
    return(
      <React.Fragment>
        {this.props.results.playlists.length > 0 ?
          <div className="SearchResults">
            <PlaylistDisplay playlists={results.playlists} addToCurrentPlaylist={addToCurrentPlaylist} />
            <div className="Tracklist">
              <div className="Tracklist-tracks">
                <TrackList
                  trackList={results.tracks}
                  addToPlaylist={addToPlaylist} />
              </div>
              <div className="Tracklist-albums">
                <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={results.albums} albums />
              </div>
            </div>
          </div> :
          <h1>No results</h1>        
        }
      </React.Fragment>
    );
  }
}



export default SearchResults;
