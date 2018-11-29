import React from 'react';
import './TrackList.css'

import Track from '../Track/Track';

const TrackList = ({ addToPlaylist, deleteTrack, inPlayList, onDragStart, handleTrackIndex, trackList }) => {
  return (
    <div className="TrackList">
      {
        trackList.map((track, index) => {
          return <Track
            track={track}
            trackIndex={index}
            id={index}
            key={track.id}
            addToPlaylist={addToPlaylist}
            deleteTrack={deleteTrack}
            inPlayList={inPlayList}
                 />
        })
      }
    </div>
  );
}


export default TrackList;
