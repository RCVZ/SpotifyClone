import React, { PureComponent } from 'react';
import SpotifyApi from '../../util/Spotify';
import './Track.css'

import Text from '../Text/Text';
import Time from '../Time/Time';

class Track extends PureComponent {

  addOnClick = (e) => {
    this.props.addToPlaylist(this.props.track);
  }

  deleteOnClick = (e) => {
    this.props.deleteTrack(this.props.track);
  }
  
  handlePlay = (e) => {    
    const urisList = this.props.getUrisList();
    SpotifyApi.playTrack(this.props.track.uri, urisList);
  }

  render() {
    const { id, trackIndex, artists, name, album, uri, duration_ms } = this.props.track;
    return(
      <div className="Track" id={trackIndex} key={id}>
        <div className="Track-information" onClick={this.handlePlay} value={uri}>
          <div>
            <img src={album.images[2].url} alt="album"/>
          </div>
          <Text name={name} artist={artists[0].name}/>
          <Time ms={duration_ms} />
        </div>
        {this.props.inPlayList ? 
        <React.Fragment>
          <button
            className="Track-action"  //maybe it can be improve by giving it the right prop from grantparentcomponent
            type="button"
            onClick={this.deleteOnClick}>-
          </button>
        </React.Fragment> :
        <button
           className="Track-action" 
           type="button"
           onClick={this.addOnClick}>+
        </button>
        }
      </div>
    );
  }
}

export default Track;
