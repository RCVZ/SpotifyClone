import React from 'react';
import './Text.css';

const Text = (props) => {
  return(
    <div className="Text">
      <p>{props.name}</p>
      <p>{props.artist}</p>
    </div>
  )
}

export default Text;
