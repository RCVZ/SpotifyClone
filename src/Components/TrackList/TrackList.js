import React from 'react';
import './TrackList.css'

import Track from '../Track/Track';
//import Grid from '../Grid/Grid';

const TrackList = ({ trackAction, inPlaylist, tracklist, position, start, end }) => {

 const getUrisList = () => {
   const newList = [];
   tracklist.map((track) => newList.push(track.uri));
   return [newList, tracklist];
 }

  return (
    <>
      {tracklist.map((track, index) => {
        if(index >= start && index<= end) {
          return (
            <Track
              position={position}
              topPosition={index * 100}
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
