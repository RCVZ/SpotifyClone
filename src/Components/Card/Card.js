import React, { useContext } from 'react';
import './Card.css';

import SpotifyApi from '../../util/Spotify';

import Text from '../Text/Text';
import ActionOverlay, { ActionOverlayOpen } from '../ActionOverlay/ActionOverlay';

const Card = ({ playlist, handleOnAdd, id, openTracks, istrackList, addToNewPlaylist, addToCurrentPlaylist }) => {

  const onPlayClick = () => {
    let uri;

    if (playlist.uri.includes('user')) {
      playlist.uri.split(':').splice(1, 2).join(':');
      uri = playlist.uri;
    } else {
      uri = playlist.uri.split(':').slice(2).join(':');
    }

    SpotifyApi.playTrack('1', uri, playlist.type);
    addToCurrentPlaylist(playlist.id, playlist)
  }

  const clickOnOverlay = () => {
    openTracks(playlist.id, playlist);
  }

  const onAddClick = () => {
    addToNewPlaylist(id, playlist);
  }


  return (
    <div className={`Card ${playlist.type}`}  >
      <div className={`Card-Img ${playlist.type}`} >
        {playlist.images[0] ? <img src={playlist.images[0].url} alt="img" /> : ""}
      </div>
      <Text name={playlist.name} />
      {istrackList ?
      <ActionOverlay
        trackAction={onAddClick}
        playlist={playlist.type === "artist" ? "artist" : null}
        onPlayClick={onPlayClick}
        clickOnOverlay={clickOnOverlay}
        /> : <ActionOverlayOpen onOpen={() => handleOnAdd(id, playlist)} /> }
    </div>
  )
}

export default Card;
