import React, { Component } from 'react';
import SpotifyApi from '../../util/Spotify';
import './Track.css'

import Text from '../Text/Text';
import Time from '../Time/Time';
import ActionOverlay from '../ActionOverlay/ActionOverlay';

import { ContextStore } from '../../Context/MainContext';

class Track extends Component {
  constructor(props){
    super(props);

    this.state = {
      mouseOver: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mouseOver !== nextState.mouseOver) {
      return true;
    } else {
      return false;
    }
  }

  static contextType = ContextStore;

  handlePlay = (e) => {
    const [urisList, tracklist] = this.props.getUrisList();
    SpotifyApi.playTrack(this.props.track.uri, urisList);
    this.context.addToCurrentPlaylist(tracklist)
  }

  handleTrackAction = (e) => {
    this.props.trackAction(this.props.track)
  }

  handleMouseEnter = () => {
    this.setState({ mouseOver: true})
  }

  handleMouseLeave = () => {
    this.setState({ mouseOver: false })
  }

  render() {
    const { artists, name, album, duration_ms, position } = this.props.track;
    return (
      <div className="Track" style={position} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="Track-information">
          <div className="Album-img" >
            {album.images[2]
              ?  <img className="shadow" src={album.images[2].url} alt="album" />
              :  null
            }
          </div>
          <div className="Track-name">
            <Text
              name={name}
              artist={artists[0].name}
              shadow={'0 15px 40px 1px rgba(0,0,0,0.30)'}
            />
          </div>
          <Time className="shadow" ms={duration_ms} />
        </div>
        {this.state.mouseOver
          ? <ActionOverlay trackAction={this.handleTrackAction} onPlayClick={this.handlePlay} inPlaylist={this.props.inPlaylist} />
           : null}
      </div>
    );
  }
}

export default Track;
