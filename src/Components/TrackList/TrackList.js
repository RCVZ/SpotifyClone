import React from 'react';
import './TrackList.css'

import Track from '../Track/Track';


const TrackList = ({ trackAction, inPlaylist, tracklist }) => {
  const getUrisList = () => {
    const newList = [];
    tracklist.map((track) => newList.push(track.uri));
    return [newList, tracklist];
  }

  return (
    <>
      {tracklist.map((track, index) => {
        return (
          <Track
            index={index}
            track={track}
            key={track.id}
            trackAction={trackAction}
            inPlaylist={inPlaylist}
            getUrisList={getUrisList}
          />
        )
       })
      }
    </>
  );
}


export default TrackList;
