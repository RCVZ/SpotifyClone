import React, { useState, useContext } from 'react';
import './ResultsTracklist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Header from '../../Components/Header/Header';
import { ContextStore } from '../../Context/MainContext';

const ResultsTracklist = ({ history }) => {

  const context = useContext(ContextStore);

  const [expanded, toggleExpand] = useState(false);

  const [scrollTopPosition, updateScrollTopPosition] = useState(() => 300);

  const [visibleItems, updateVisibility] = useState({
    start: 0,
    end: 5
  });

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/tracks') {
      history.push('/search');
      toggleExpand(false);
      updateVisibility({ start: 0, end: 5 });
      updateScrollTopPosition(300);
    } else {
      history.push('/search/tracks');
      toggleExpand(true);
      updateVisibility({ start: 0,  end: 41 });
    }
  };

  const scrollPosition = (e) => {    
    if (!expanded) return
    //console.log(e.target.scrollTop)

    if (e.target.scrollTop >= scrollTopPosition) {
      updateVisibility({ start: visibleItems.start + 6, end: visibleItems.end + 6 });
      updateScrollTopPosition(scrollTopPosition + 300)
      //console.log(scrollTopPosition);
    }

    else if ((e.target.scrollTop + 300) <= scrollTopPosition) {
      updateVisibility({ start: visibleItems.start - 6, end: visibleItems.end - 6 });
      updateScrollTopPosition(scrollTopPosition - 300)
    }
  }

  return (
    <div className="ResultsTracklist">
      <Header name={expanded ? 'Less' : 'More' } buttonAction={handleToggleExpand}>Tracks</Header>
      <div className="viewport" onScroll={scrollPosition} style={{ height: expanded ? '675px' : '350px' }} >
        <div className="list" style={{ height: expanded ? (context.tracks.length * 50 ) + 50: '350px'  }}>
          <TrackList
            trackAction={context.addToNewPlaylist}
            tracklist={context.tracks}
            start={visibleItems.start}
            end={visibleItems.end}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultsTracklist;
