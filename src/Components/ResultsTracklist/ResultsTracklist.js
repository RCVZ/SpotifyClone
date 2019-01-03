import React from 'react';
import './ResultsTracklist.css';

import TrackList from '../TrackList/TrackList';
import Header from '../Header/Header';


const ResultsTracklist = ({ tracklist, addToPlaylist, buttonAction, state }) => {
  return (
    <div className="ResultsTracklist" >
      <Header state={state} buttonAction={buttonAction}>Tracks</Header>
      <TrackList trackAction={addToPlaylist} tracklist={tracklist}  />
    </div>
  );
}

export default ResultsTracklist;