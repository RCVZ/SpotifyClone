import React from 'react';
import './Card.css';

import SpotifyApi from '../../util/Spotify';

import Text from '../Text/Text';
import ActionOverlay from '../ActionOverlay/ActionOverlay';

const Card = ({ playlist, handleOnclick, id }) => {

  const onPlayClick = () => {
    const uri = playlist.uri.split(':').slice(2).join(':');
    SpotifyApi.playTrack('', uri);
  }

  return (
    <div className={`Card ${playlist.type === "artist" ? "artist" : false}`}>
      <div className={`Card-Img ${playlist.type === "artist" ? "artist" : false}`} >
        {playlist.images[0] ? <img src={playlist.images[0].url} alt="img" /> : null}
      </div>
      <Text name={playlist.name} />
      <ActionOverlay 
        trackAction={() => handleOnclick(id, playlist)} 
        playlist={ playlist.type === "artist" ? "artist" : null }
        onPlayClick={onPlayClick}
      />
    </div>
  )
}

export default Card;