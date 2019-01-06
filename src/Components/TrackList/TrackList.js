import React from 'react';
import './TrackList.css'

import Track from '../Track/Track';
import Grid from '../Grid/Grid';

const TrackList = ({ trackAction, inPlaylist, tracklist }) => {

 const getUrisList = () => {
    const newList = [];
    tracklist.map((track) => newList.push(track.uri));
    return newList;
  }

  return (
    <Grid>
      {tracklist.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            trackAction={trackAction}
            inPlaylist={inPlaylist}
            getUrisList={getUrisList}
          />
        )
      })
      }
    </Grid>
  );
}


export default TrackList;
