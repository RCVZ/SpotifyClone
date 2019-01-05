import React from 'react';
import './TrackList.css'

import Track from '../Track/Track';
import Grid from '../Grid/Grid';

const TrackList = ({ trackAction, inPlaylist, tracklist, getUrisList }) => {
  return (
    <Grid>
      {tracklist.map((track, index) => {
        return (
          <Track
            track={track}
            trackIndex={index}
            id={track.id}
            key={index}
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
