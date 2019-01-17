import React, { useContext} from 'react';
import './CurrentPlaylist.css';

import TrackList from '../TrackList/TrackList';

import { ContextStore } from '../../Context/MainContext';

const CurrentPlaylist = () => {

  const context = useContext(ContextStore)
  
  return (
    <TrackList tracklist={context.currentPlaylist} />
  );
}

export default CurrentPlaylist;