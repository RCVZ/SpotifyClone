import React, { useState, useContext } from 'react';
import './ResultsTracklist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Header from '../../Components/Header/Header';

import { ContextStore } from '../../Context/MainContext';

const ResultsTracklist = ({ history }) => {

  const context = useContext(ContextStore);

  const [expanded, toggleExpand] = useState(false);

  const [visibleItems, updateVisibility] = useState({
    scrollTopPosition: 100,
    start: 0,
    end: 5
  });

  const handleToggleExpand = () => {
    if (history.location.pathname === '/search/tracks') {
      history.push('/search');
      toggleExpand(false);
      updateVisibility({
        scrollTopPosition: 100,
        start: 0,
        end: 5
      });
    } else {
      history.push('/search/tracks');
      toggleExpand(true);
      updateVisibility({
        scrollTopPosition: 100,
        start: 0,
        end: 36
      });
    }
  };

  const scrollPosition = (e) => {
    if (!expanded) return

    if (e.target.scrollTop >= visibleItems.scrollTopPosition) {
      updateVisibility({
        scrollTopPosition: visibleItems.scrollTopPosition + 100,
        start: visibleItems.start + 2,
        end: visibleItems.end + 2
      });
    }

    else if ((e.target.scrollTop + 100) <= visibleItems.scrollTopPosition) {
      updateVisibility({
        scrollTopPosition: visibleItems.scrollTopPosition - 100,
        start: visibleItems.start - 2,
        end: visibleItems.end - 2
      });
    }
    console.log(visibleItems.scrollTopPosition)
    console.log(e.target.scrollTop)
  }

  return (
    <div className="ResultsTracklist">
      <Header name={expanded ? 'Less' : 'More' } buttonAction={handleToggleExpand}>Tracks</Header>
      <div className="viewport" onScroll={scrollPosition} style={{ height: expanded ? '675px' : '350px' }} >
        <div className="list" style={{ height: expanded ? context.tracks.length * 50 : '350px'  }}>
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
