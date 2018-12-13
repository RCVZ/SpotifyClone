import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';

import { connect } from 'react-redux';
import { updatePlayList } from './../../actions';


const mapStateToProps = (state) => {
  return {
    searchResults: state.searchTracks.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePlaylist: (playlist) => dispatch(updatePlayList(playlist))
  }
}

class SearchResults extends Component {

  render() {
    const { searchResults, addToPlaylist } = this.props;
    return(
      <React.Fragment>        
        <div className="SearchResults">
          <PlaylistDisplay playlists={searchResults.playlists}/>
          <div className="Tracklist">
            <div className="Tracklist-tracks">
              <TrackList
                trackList={searchResults.tracks}
                addToPlaylist={addToPlaylist}/>
            </div>
            <div className="Tracklist-albums">
              <PlaylistDisplay playlists={searchResults.albums} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
