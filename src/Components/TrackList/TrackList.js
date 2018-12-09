import React, { PureComponent } from 'react';
import './TrackList.css'

import Track from '../Track/Track';

class TrackList extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      tracklistUris: ''
    }
  }
  render() {
    const { addToPlaylist, deleteTrack, inPlayList, trackList } = this.props;
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
              />
            )
          })
        }
      </div>
    );
  }
}


export default TrackList;
