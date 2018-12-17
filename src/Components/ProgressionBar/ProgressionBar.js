import React from 'react';
import './ProgressionBar.css';

const ProgressionBar = ({ percentage, sliderAction }) => {
  return(
    <div className="Bar-container">
      <div className="Bar" style={{width: `${percentage}%` }}>
        {/* <input onChange={sliderAction} type="range" min="1" value={`${percentage}`} max="100" className="Bar" /> */}
      </div>
      <div className="slider"/>
    </div>
  )
}

export default ProgressionBar;
