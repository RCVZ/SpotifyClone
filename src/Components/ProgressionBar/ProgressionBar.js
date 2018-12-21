import React from 'react';
import './ProgressionBar.css';

const ProgressionBar = ({ currentPostion, sliderAction, maxValue, handleMouseUp }) => {
  return(
    <div className="Bar-container">
      <input className="Bar" 
        onMouseUp={handleMouseUp}
        onChange={(e) => sliderAction(e)} 
        step='1' 
        type="range" 
        min="1" 
        value={currentPostion} 
        max={maxValue}/>
    </div>
  )
}

export default ProgressionBar;
