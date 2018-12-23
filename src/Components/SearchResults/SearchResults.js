import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';

class SearchResults extends Component {

  render() {
    const { searchResults, addToPlaylist , results } = this.props;
    console.log("test1", results);
    return(
      <React.Fragment>
        {
          results.playlists.length > 0 ?
          <div className="SearchResults">
            <PlaylistDisplay playlists={results.playlists} />
            <div className="Tracklist">
              <div className="Tracklist-tracks">
                <TrackList
                  trackList={results.tracks}
                  addToPlaylist={addToPlaylist} />
              </div>
              <div className="Tracklist-albums">
                <PlaylistDisplay playlists={results.albums} albums/>
              </div>
            </div>
          </div> :
          <React.Fragment></React.Fragment>
        }      
      </React.Fragment>
    );
  }
}



export default SearchResults;
