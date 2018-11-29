import React from 'react';
import './ProgressionBar.css';

const ProgressionBar = ({percentage}) => {
  return(
    <div className="Bar-container">
      <div className="Bar" style={{width: `${percentage}%` }}/>
    </div>

  )
}

export default ProgressionBar;
