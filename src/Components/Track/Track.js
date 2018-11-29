import React, { PureComponent } from 'react';
import SpotifyApi from '../../util/Spotify';
import './Track.css'

import Text from '../Text/Text';

class Track extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      trackUri: ''
    }
  }
  addOnClick = (e) => {
    this.props.addToPlaylist(this.props.track);
  }

  deleteOnClick = (e) => {
    this.props.deleteTrack(this.props.track);
  }

  renderButton = () => {
    if (this.props.inPlayList) {
      return <button type="button" className="Track-action" onClick={this.deleteOnClick}>-</button>
    } else {
      return <button type="button" className="Track-action" onClick={this.addOnClick}>+</button>
    }
  }

  handlePlay = (e) => {
    console.log("this is the: ", e.target.value);
    SpotifyApi.playTrack(this.props.track.uri);
  }

  time = (ms) => {
    let minute, seconds;
    seconds = Math.floor(ms / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minute}:${seconds}`;
  }

  render() {
    const { id, trackIndex, artists, name, album, uri } = this.props.track;
    return(
      <div className="Track" id={trackIndex} key={id}>
        <div className="Track-information" onClick={this.handlePlay} value={uri}>
          <div>
            <img src={album.images[2].url} alt="album"/>
          </div>
          <Text name={name} artist={artists[0].name}/>
        </div>
        {this.renderButton()}
      </div>
    );
  }
}

/*draggable
onDragStart={this.handleOnDrag}
onDragOver={this.handeDragover}*/

export default Track;
