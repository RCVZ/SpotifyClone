import React from 'react';
import './Card.css';

import Text from '../Text/Text';

const Card = ({ playlist, handleOnclick, id }) => {
  return(
    <div className="Card">
      <div onClick={() => handleOnclick(id, playlist.images)} >
        <img src={playlist.images[0].url} alt="img"/>
        <Text name={playlist.name}/>
      </div>
    </div>
  )
}

export default Card;
