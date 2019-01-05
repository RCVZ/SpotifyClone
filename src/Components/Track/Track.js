import React, { PureComponent } from 'react';
import SpotifyApi from '../../util/Spotify';
import './Track.css'

import Text from '../Text/Text';
import Time from '../Time/Time'; 
import ActionOverlay from '../ActionOverlay/ActionOverlay';

class Track extends PureComponent {
  
  handlePlay = (e) => {    
    const urisList = this.props.getUrisList();
    SpotifyApi.playTrack(this.props.track.uri, urisList);
  }

  handleTrackAction = (e) => {
    this.props.trackAction(this.props.track)
  }

  render() {
    const { id, trackIndex, artists, name, album, uri, duration_ms } = this.props.track;
    return(
      <div className="Track" id={id} key={trackIndex}>
        <div className="Track-information" value={uri}>
          <div className="Album-img" >
            <img src={album.images[2].url} alt="album" /> 
          </div> 
          <div className="Track-name">
            <Text name={name} artist={artists[0].name} />
          </div>  
          <Time ms={duration_ms} />          
        </div>    
        <ActionOverlay trackAction={this.handleTrackAction} onPlayClick={this.handlePlay} inPlaylist={this.props.inPlaylist}/>   
      </div> 
    );
  }
}

export default Track;