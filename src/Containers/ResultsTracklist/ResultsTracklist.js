import React, { useState, useContext } from "react";
import "./ResultsTracklist.css";

import Track from "../../Components/Track/Track";
import Header from "../../Components/Header/Header";
import Viewport from "../../Components/Viewport/Viewport";
import { ContextStore } from "../../Context/MainContext";

const ResultsTracklist = ({ history, loadMore }) => {
  const context = useContext(ContextStore);  

  const [expanded, toggleExpand] = useState(() => false);
  const [scrollActive, activeScroll] = useState(() => false);
  const [scroll, updateScroll] = useState({
    offSet: 0,
    direction: "down"
  });

  let timer = null;

  const handleToggleExpand = () => {
    if (history.location.pathname === "/search/tracks") {
      history.push("/search");
      toggleExpand(false);
    } else {
      history.push("/search/tracks");
      toggleExpand(true);
    }
  };

  const scrollPosition = e => {
    activeScroll(true);
    clearTimeout(timer);
    timer = setTimeout(() => activeScroll(false), 300);
    
    scroll.offSet < e.target.scrollTop
      ? updateScroll({
          offSet: e.target.scrollTop,
          direction: "down"
        })
      : updateScroll({
          offSet: e.target.scrollTop,
          direction: "up"
        });

    if (context.tracks.length <= start + 26) {
      loadMore();
    }
  };
  
  const getPosition = index => {
    let position;
    if (index % 2 === 0) {
      position = index * 50;
      return { top: position, left: 0 };
    } else {
      position = (index - 1) * 50;
      return { top: position, right: 0 };
    }
  };

  let start = Math.floor(scroll.offSet / 50 );
  let end = start + 20;
  let listHeight = context.tracks.length * 50 + 100 + 'px';

  if(scroll.direction === 'down') {
    end += 2
  } else {
    start -=2
  }

  if(!expanded) {
    start = 0;
    end = 5;
    listHeight = end * 50 + 100 + 'px'
  } else {
    if (start % 2 !== 0) {
    start -= 1      
    }
  }


  return (
    <div className="ResultsTracklist">
      <Header  name={expanded ? "Less" : "More"}  buttonAction={handleToggleExpand}>Tracks</Header>
      <Viewport scrollPosition={scrollPosition} style={{ height: expanded ? "700px" : "350px" }} >
        <div className="list" style={{ height: listHeight, pointerEvents: scrollActive ? "none" : "auto" }} >
          {context.tracks.map((track, index) => {
            if (index >= start && index <= end) {
              return (
                <Track 
                  index={index} 
                  track={track} 
                  key={track.id}
                  position={getPosition(index)}
                />
              )
            }
          })}
        </div>
      </Viewport>
    </div>
  );
};

export default ResultsTracklist;

// const memoTracksWithPosition = useCallback(() => {
//   return tracksWithPosition(context.tracks)
// }, [context.tracks]);

// const scrollPosition = (e) => {
//   if (!expanded) return

//   activeScroll(true);
//   clearTimeout(timer)
//   timer = setTimeout(() => activeScroll(false), 66);

//   if (e.target.scrollTop >= scrollTopPosition) {
//     updateVisibility({ start: visibleItems.start + 2, end: visibleItems.end + 2 });
//     updateScrollTopPosition(scrollTopPosition + 100);
//     //console.log(scrollTopPosition);
//   }

//   else if ((e.target.scrollTop + 100) <= scrollTopPosition) {
//     updateVisibility({ start: visibleItems.start - 2, end: visibleItems.end - 2 });
//     updateScrollTopPosition(scrollTopPosition - 100);
//   }

//   if (context.tracks.length <= (visibleItems.end + 6)) {
//     loadMore();
//   }
// }

// const renderNext = () => {
//   if (!expanded) return

//   activeScroll(true);
//   clearTimeout(timer)
//   timer = setTimeout(() => activeScroll(false), 1000);
//   updateVisibility({ start: visibleItems.start + 2, end: visibleItems.end + 2 });

//   if (context.tracks.length <= (visibleItems.end + 20)) {
//     loadMore();
//   }
// }

// const renderPrev = () => {
//   if (!expanded || visibleItems.start === 0) return

//   activeScroll(true);
//   clearTimeout(timer)
//   timer = setTimeout(() => activeScroll(false), 1000);
//   updateVisibility({ start: visibleItems.start - 2, end: visibleItems.end - 2 });
// }



// const getPosition = index => {
//   let position;
//   if (index % 2 === 0) {
//     position = index * 50;
//     return { top: position, left: 0 };
//   } else {
//     position = (index - 1) * 50;
//     return { top: position, right: 0 };
//   }
// };

// const tracksWithPosition = list => {
//   console.log("test");
//   let cList = [...list];
//   cList.forEach((element, index) => {
//     element["position"] = getPosition(index);
//   });
//   return cList;
// };
