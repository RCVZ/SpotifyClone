import React from 'react';
import './TrackList.css'

import Track from '../Track/Track';
//import Grid from '../Grid/Grid';

const TrackList = ({ trackAction, inPlaylist, tracklist, start, end }) => {

  const getUrisList = () => {
    const newList = [];
    tracklist.map((track) => newList.push(track.uri));
    return [newList, tracklist];
  }

  const getPosition = (index) => {
      if (index % 2 === 0) {
        let position = index * 50
        return { top: position, left: 0 }
      } else {
        let position = (index - 1) * 50
        return { top: position, right: 0 }
      }
    }

  return (
    <>
      {/* eslint-disable-next-line array-callback-return */}
      {tracklist.map((track, index) => { 
        if (index >= start && index <= end) {
          return (
            <Track
              position={getPosition(index)}
              index={index}
              track={track}
              key={track.id}
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
