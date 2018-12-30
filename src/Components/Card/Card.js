import React from 'react';
import './Card.css';

import Text from '../Text/Text';
import ActionOverlay from '../ActionOverlay/ActionOverlay';

const Card = ({ playlist, handleOnclick, id }) => {
  return (
    <div className="Card">
      <div className="Card-Img" >
        <img src={playlist.images[0].url} alt="img" />
        <Text name={playlist.name} />
      </div>
      <ActionOverlay trackAction={() => handleOnclick(id, playlist.images)}/>
    </div>
  )
}

export default Card;