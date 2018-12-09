import React, { PureComponent } from 'react';
import './TrackList.css'

import Track from '../Track/Track';

class TrackList extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      tracklistUris: []
    }
  }

  getUrisList = () => {
    //console.log("this is the uri at trackList.js", uris);
    const newList = []; // eslint-disable-next-line 
    this.props.trackList.map((track)=> {
      newList.push(track.uri);
    })  
    return newList;
  }

  render() {
    const { addToPlaylist, deleteTrack, inPlayList, trackList  } = this.props;
    return (
      <div className="TrackList">
        {
          trackList.map((track, index) => {
            return (
              <Track
                track={track}
                trackIndex={index}
                id={index}
                key={track.id}
                addToPlaylist={addToPlaylist}
                deleteTrack={deleteTrack}
                inPlayList={inPlayList}
                getUrisList={this.getUrisList}
              />
            )
          })
        }
      </div>
    );
  }
}


export default TrackList;
