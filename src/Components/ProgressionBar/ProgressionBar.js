import React from 'react';
import './ProgressionBar.css';

const ProgressionBar = ({ currentPostion, sliderAction, maxValue, handleMouseUp }) => {
  return(
    <div className="Bar-container">
      <input className="Bar" 
        onMouseUp={handleMouseUp}
        onChange={sliderAction} 
        step='1' 
        type="range" 
        min="1" 
        value={currentPostion} 
        max={maxValue}/>
        <div className="progression" style={{ width: `${(100 / maxValue) * currentPostion}%` }} />      
    </div>
  )
}

export default ProgressionBar;
