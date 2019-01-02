import React from 'react';
import './ResultsTracklist.css';

import TrackList from '../TrackList/TrackList';

const ResultsTracklist = ({ tracklist, addToPlaylist }) => {
  return (
    <div className="ResultsTracklist" >
      <TrackList trackAction={addToPlaylist} tracklist={tracklist}  />
    </div>
  );
}

export default ResultsTracklist;