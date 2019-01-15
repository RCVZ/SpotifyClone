import React from 'react';
import './Text.css';

const Text = ({ name, artist, textSize, overfl, shadow }) => {
  return(
    <div className="Text">
      <p style={{ fontSize: textSize, overflow: overfl, textShadow: shadow }}>{name}</p>
      <p style={{ fontSize: textSize, overflow: overfl, textShadow: shadow }}>{artist}</p>
    </div>
  )
}

export default Text;
