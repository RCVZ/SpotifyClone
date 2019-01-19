import React from 'react';
import './Card.css';

import SpotifyApi from '../../util/Spotify';

import Text from '../Text/Text';
import ActionOverlay, { ActionOverlayOpen } from '../ActionOverlay/ActionOverlay';

const Card = ({ playlist, openTracks, addToNewPlaylist, addToCurrentPlaylist }) => {

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
    addToNewPlaylist(playlist.id, playlist);
  }

  return (
    <div className={`Card ${playlist.type}`}  >
      <div className={`Card-Img ${playlist.type}`} >
        {playlist.images[0] ? <img src={playlist.images[0].url} alt="img" /> : ""}
      </div>
      <Text name={playlist.name} />
      {playlist.type !== undefined ?
      <ActionOverlay
        trackAction={onAddClick}
        playlistType={playlist.type}
        onPlayClick={onPlayClick}
        clickOnOverlay={clickOnOverlay}
        /> : <ActionOverlayOpen onOpen={clickOnOverlay} /> }
    </div>
  )
}

export default Card;
