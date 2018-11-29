import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay';
import Button from '../Button/Button';

class SearchResults extends Component {
  handleOnClick = (e) => {
    this.props.onRouteChange('');
  }

  render() {
    const { trackList, addToPlaylist } = this.props;
    return(
      <React.Fragment>
        <Button type="button" onClick={this.handleOnClick} name="CLOSE"/>
        <div className="SearchResults">
          <PlaylistDisplay playlists={trackList.playlists}/>
          <div className="Tracklist">
            <div className="Tracklist-tracks">
              <TrackList
                trackList={trackList.tracks}
                addToPlaylist={addToPlaylist}/>
            </div>
            <div className="Tracklist-artists">
              Placeholder
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}



export default SearchResults;
