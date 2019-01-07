import React, { useState } from 'react';
import './ResultsTracklist.css';

import TrackList from '../TrackList/TrackList';
import Header from '../Header/Header';

import { withRouter } from "react-router-dom";

const ResultsTracklist = ({ tracklist, addToPlaylist, history }) => {

  const [expand, toggleExpand] = useState({
    expanded: false,
    state: 'More',
    results: 4
  });

  const handleToggleExpand = () => {
    toggleExpand(() => {
      if (history.location.pathname === '/search/tracks') {
        history.push('/search')
        return { expanded: false, state: 'More', results: 4 }
      } else {
        history.push('/search/tracks')
        return { expanded: true, state: 'Less', results: Infinity }
      }
    })
  }

  return (
    <div className="ResultsTracklist" >
      <Header name={expand.state} buttonAction={handleToggleExpand}>Tracks</Header>
      <TrackList trackAction={addToPlaylist} tracklist={tracklist.slice(0, expand.results)}  />
    </div>
  );
}

export default withRouter(ResultsTracklist);