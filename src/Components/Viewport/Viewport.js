import React, { useState } from 'react';
import './Viewport.css';

const Viewport = ({children, style, renderNext, renderPrev, scrollPosition}) => {
  // const [scroll, updateScroll] = useState({
  //   offSet: 0,
  //   direction: 'down'
  // });

  // const scrollPosition = (e) => {
  //   scroll.offSet < e.target.scrollTop 
  //   ? updateScroll({
  //     offSet: e.target.scrollTop ,
  //     direction: 'down'
  //   })
  //   : updateScroll({
  //     offSet: e.target.scrollTop ,
  //       direction: 'up'
  //     })
  //   // if (e.target.scrollTop >= scrollTopPosition) {
  //   //   renderNext()
  //   //   updateScrollTopPosition(scrollTopPosition + 100);      
  //   // }

  //   // else if (e.target.scrollTop + 100 <= scrollTopPosition) {
  //   //   renderPrev()
  //   //   updateScrollTopPosition(scrollTopPosition - 100);      
  //   // }

  // }

    return (
      <div className="Viewport" onScroll={scrollPosition} style={style} >
        {children}
      </div>
    )
};

export default Viewport;