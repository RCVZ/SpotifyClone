import React, { PureComponent } from 'react';
import './Card.css';

import Text from '../Text/Text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Card = ({ playlist, handleOnclick, id }) => {
  return (
    <div className="Card">
      <div className="Card-Img" onClick={() => handleOnclick(id, playlist.images)} >
        <img src={playlist.images[0].url} alt="img" />
        <Text name={playlist.name} />
      </div>
      <div className="Action-Overlay">
        <button className="play-pause" onClick={onPlayClick} >
          <FontAwesomeIcon className="button" icon={faPlusCircle} size="lg" />
        </button>
        <button className="play-pause" onClick={onPlayClick} >
          <FontAwesomeIcon className="button" icon={faPlay} size="lg" />
        </button>
      </div>
    </div>
  )
}

export default Card;