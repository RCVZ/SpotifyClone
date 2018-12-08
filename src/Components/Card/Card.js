import React from 'react';
import './Card.css';

import Text from '../Text/Text';

const Card = ({ playlist }) => {
  return(
    <div className="Card">
      <div>
        <img src={playlist.images[0].url} alt="img"/>
        <Text name={playlist.name}/>
      </div>
    </div>
  )
}

export default Card;
