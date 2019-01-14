import React from 'react';
import './Card.css';

import SpotifyApi from '../../util/Spotify';

import Text from '../Text/Text';
import ActionOverlay from '../ActionOverlay/ActionOverlay';

const Card = ({ playlist, handleOnclick, id }) => {

  const onPlayClick = () => {
    let uri;
    if (playlist.uri.includes('user')) {
      playlist.uri.split(':').splice(1, 2).join(':');
      uri = playlist.uri;
    } else {
      uri = playlist.uri.split(':').slice(2).join(':');
    }
    console.log(playlist.uri)
    // const uri = playlist.uri.split(':').slice(2).join(':');
    console.log(uri)
    SpotifyApi.playTrack('1', uri, playlist.type);
  }

  //spotify:user:1120095756:playlist:3ftnOdvI6GB3kTde5e8KgO
  // spotify:user:1120095756:playlist:3ftnOdvI6GB3kTde5e8KgO
   //spotify: playlist: 37i9dQZF1DWSBi5svWQ9Nk

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