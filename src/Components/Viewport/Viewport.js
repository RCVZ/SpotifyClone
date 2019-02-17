import React from 'react';
import './Viewport.css';

const Viewport = ({children, style, scrollPosition}) => {
    return (
      <div className="Viewport" onScroll={scrollPosition} style={style} >
        {children}
      </div>
    )
};

export default Viewport;