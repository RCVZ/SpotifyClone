import React from 'react';
import './TrackList.css'

import Track from '../Track/Track';


const TrackList = ({ trackAction, inPlaylist, tracklist, start, end }) => {
  const getUrisList = () => {
    const newList = [];
    tracklist.map((track) => newList.push(track.uri));
    return [newList, tracklist];
  }

  return (
    <>
      {/* eslint-disable-next-line array-callback-return */}
      {tracklist.map((track, index) => { 
        if (index >= start && index <= end) {
          return (
            <Track
              index={index}
              track={track}
              key={index}
              trackAction={trackAction}
              inPlaylist={inPlaylist}
              getUrisList={getUrisList}
            />
          )
        }
      })
      }
    </>
  );
}


export default TrackList;
