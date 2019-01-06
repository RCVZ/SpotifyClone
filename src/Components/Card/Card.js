import React from 'react';
import './Card.css';

import Text from '../Text/Text';
import ActionOverlay from '../ActionOverlay/ActionOverlay';

const Card = ({ playlist, handleOnclick, id, artist }) => {
  return (
    <div className={`Card ${playlist.type === "artist" ? "artist" : null}`}>
      <div className={`Card-Img ${playlist.type === "artist" ? "artist" : null}`} >
        {playlist.images[0] ? <img src={playlist.images[0].url} alt="img" /> : null}
      </div>
      <Text name={playlist.name} />
      <ActionOverlay trackAction={() => handleOnclick(id, playlist.images)}/>
    </div>
  )
}

export default Card;