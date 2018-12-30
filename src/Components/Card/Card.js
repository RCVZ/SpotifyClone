import React from 'react';
import './Card.css';

import Text from '../Text/Text';
import ActionOverlay from '../ActionOverlay/ActionOverlay';

const Card = ({ playlist, handleOnclick, id }) => {
  return (
    <div className="Card">
      <div className="Card-Img" onClick={() => handleOnclick(id, playlist.images)} >
        <img src={playlist.images[0].url} alt="img" />
        <Text name={playlist.name} />
      </div>
      <ActionOverlay />
    </div>
  )
}

export default Card;