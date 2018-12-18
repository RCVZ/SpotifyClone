import React from 'react';
import './ProgressionBar.css';

const ProgressionBar = ({ percentage, sliderAction, maxValue }) => {
  return(
    <div className="Bar-container">
      <input className="Bar" onChange={(e) => sliderAction(e)} step='1' type="range" min="1" value={percentage} max={maxValue}/>
    </div>
  )
}

export default ProgressionBar;
