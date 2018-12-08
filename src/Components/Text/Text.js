import React from 'react';
import './Text.css';

const Text = ({ name, artist }) => {
  return(
    <div className="Text">
      <p>{name}</p>
      <p>{artist}</p>
    </div>
  )
}

export default Text;
