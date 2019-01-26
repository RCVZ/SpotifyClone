import React, { PureComponent } from 'react';
import SpotifyApi from '../../util/Spotify';
import './Track.css'

import Text from '../Text/Text';
import Time from '../Time/Time'; 
import ActionOverlay from '../ActionOverlay/ActionOverlay';

import { ContextStore } from '../../Context/MainContext';

class Track extends PureComponent {

  static contextType = ContextStore;
  
  handlePlay = (e) => {    
    const [urisList, tracklist] = this.props.getUrisList();
    SpotifyApi.playTrack(this.props.track.uri, urisList);
    this.context.addToCurrentPlaylist(tracklist)
  }

  handleTrackAction = (e) => {
    this.props.trackAction(this.props.track)
  }

  render() {
    const { artists, name, album, duration_ms } = this.props.track;
    return(
      <div className="Track" style={{ top: `${this.props.topPosition}px` }}>
        <div className="Track-information">
          <div className="Album-img" >
            {album.images[2] ? 
              <img className="shadow" src={album.images[2].url} alt="album" /> :
              null
            }            
          </div> 
          <div className="Track-name">
            <Text 
              name={name} 
              artist={artists[0].name} 
              shadow={'0 15px 40px 1px rgba(0,0,0,0.30)' }
            />
          </div>  
          <Time className="shadow" ms={duration_ms} />          
        </div>    
        <ActionOverlay trackAction={this.handleTrackAction} onPlayClick={this.handlePlay} inPlaylist={this.props.inPlaylist}/>   
      </div> 
    );
  }
}

export default Track;