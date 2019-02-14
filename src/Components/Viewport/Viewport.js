import React, { useState } from 'react';
import './Viewport.css';

const Viewport = ({children, style, renderNext, renderPrev}) => {
  const [scrollTopPosition, updateScrollTopPosition] = useState(() => 100);

  const scrollPosition = (e) => {

    if (e.target.scrollTop >= scrollTopPosition) {
      renderNext()
      updateScrollTopPosition(scrollTopPosition + 100);      
    }

    else if ((e.target.scrollTop + 100) <= scrollTopPosition) {
      renderPrev()
      updateScrollTopPosition(scrollTopPosition - 100);      
    }

  }

    return (
      <div className="Viewport" onScroll={scrollPosition} style={style} >
        {children}
      </div>
    )
};

export default Viewport;