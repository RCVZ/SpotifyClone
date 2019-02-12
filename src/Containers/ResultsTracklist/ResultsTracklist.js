import React, { useState, useContext, useEffect, useCallback } from 'react';
import './ResultsTracklist.css';

import TrackList from '../../Components/TrackList/TrackList';
import Header from '../../Components/Header/Header';
import { ContextStore } from '../../Context/MainContext';

const ResultsTracklist = ({ history }) => {
  const context = useContext(ContextStore);

  const [scrollTopPosition, updateScrollTopPosition] = useState(
         100
    );
  const [expanded, toggleExpand] = useState(
         false
    );
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
      updateVisibility({ start: 0,  end: 15 });
    }
  };

  const tracksWithPosition = (list) => {
    let cList = [...list]
    
    cList.forEach((element, index) => {
      element['position'] = getPosition(index);
    });
    return cList
  }

  const getPosition = (index) => {
    let position;
    if (index % 2 === 0) {
      position = index * 50;
      return { top: position, left: 0 }
    } else {
      position = (index - 1) * 50;
      return { top: position, right: 0 }
    }
  };

  const scrollPosition = (e) => {    
    if (!expanded) return
    console.log(e.target.scrollTop)

    if (e.target.scrollTop >= scrollTopPosition) {
      updateVisibility({ start: visibleItems.start + 2, end: visibleItems.end + 2 });
      updateScrollTopPosition(scrollTopPosition + 100)
      //console.log(scrollTopPosition);
    }

    else if ((e.target.scrollTop + 100) <= scrollTopPosition) {
      updateVisibility({ start: visibleItems.start - 2, end: visibleItems.end - 2 });
      updateScrollTopPosition(scrollTopPosition - 100)
    }
  }

  const memoTracksWithPosition = useCallback(() => {
    return tracksWithPosition(context.tracks)
  }, [context.tracks])

  return (
    <div className="ResultsTracklist">
      <Header name={expanded ? 'Less' : 'More' } buttonAction={handleToggleExpand}>Tracks</Header>
      <div className="viewport" onScroll={scrollPosition} style={{ height: expanded ? '675px' : '350px' }} >
        <div className="list" style={{ height: expanded ? (context.tracks.length * 50 ) + 100: '350px'  }}>
          <TrackList
            trackAction={context.addToNewPlaylist}
            tracklist={memoTracksWithPosition()}
            start={visibleItems.start}
            end={visibleItems.end}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultsTracklist;
