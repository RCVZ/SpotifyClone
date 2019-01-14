import React,{ useContext } from 'react';
//import './Playlist.css';

import TrackList from '../TrackList/TrackList';

const context = useContext;

const Playlist = ({ trackAction }) => {
  return(
    <div className="Playlist" >
      <TrackList 
        tracklist={context.tracklist} 
        trackAction={trackAction}
      />
    </div>
    );
}



export default Playlist;