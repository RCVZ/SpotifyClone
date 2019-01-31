import React, { useContext} from 'react';
import './CurrentPlaylist.css';

import TrackList from '../TrackList/TrackList';
import Grid from '../../Components/Grid/Grid';

import { ContextStore } from '../../Context/MainContext';

const CurrentPlaylist = () => {

  const context = useContext(ContextStore)
  
  return (
    <Grid>
      <TrackList
        tracklist={context.currentPlaylist}
        start={0}
        end={Infinity}
      />
    </Grid>
  );
}

export default CurrentPlaylist;