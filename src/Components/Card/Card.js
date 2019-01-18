import React, { useContext } from 'react';
import './Card.css';

import SpotifyApi from '../../util/Spotify';

import Text from '../Text/Text';
import ActionOverlay, { ActionOverlayOpen } from '../ActionOverlay/ActionOverlay';

import { ContextStore } from '../../Context/MainContext';

const Card = ({ playlist, handleOnAdd, id, history, istrackList }) => {

  const context = useContext(ContextStore);

  const onPlayClick = () => {
    let uri;

    if (playlist.uri.includes('user')) {
      playlist.uri.split(':').splice(1, 2).join(':');
      uri = playlist.uri;
    } else {
      uri = playlist.uri.split(':').slice(2).join(':');
    }

    SpotifyApi.playTrack('1', uri, playlist.type);
  }

  const clickOnOverlay = () => {
    let newPlaylist = [];

    // if (!istrackList) {
    //   return handleOnclick(playlist.id, playlist); 
    // }

    SpotifyApi.getPlaylist(playlist.id, 'spotify').then((tracklist) => {
      tracklist.map((playlist) => newPlaylist.push(playlist.track));
      context.updateState('tracks', newPlaylist);
      history.push('/search/tracks')
    })
  }


  return (
    <div className={`Card ${playlist.type}`}  >
      <div className={`Card-Img ${playlist.type}`} >
        {playlist.images[0] ? <img src={playlist.images[0].url} alt="img" /> : ""}
      </div>
      <Text name={playlist.name} />
      {istrackList ?
      <ActionOverlay
        trackAction={() => handleOnAdd(id, playlist)}
        playlist={playlist.type === "artist" ? "artist" : null}
        onPlayClick={onPlayClick}
        clickOnOverlay={clickOnOverlay}
        /> : <ActionOverlayOpen onOpen={() => handleOnAdd(id, playlist)} /> }
    </div>
  )
}

export default Card;
