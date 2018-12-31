import React from 'react';
import './Grid.css';

const Grid = ({children}) => {
  return (
    <div className="Grid">
      {children}
    </div>
  );
}

export default Grid;