import React from 'react';
import './Text.css';

const Text = ({ name, artist, textSize, overfl }) => {
  return(
    <div className="Text">
      <p style={{ fontSize: textSize, overflow: overfl  }}>{name}</p>
      <p style={{ fontSize: textSize, overflow: overfl  }}>{artist}</p>
    </div>
  )
}

export default Text;
