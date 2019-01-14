import React, { useState, useContext } from 'react';
import './Card.css';

import SpotifyApi from '../../util/Spotify';

import Text from '../Text/Text';
import ActionOverlay from '../ActionOverlay/ActionOverlay';

import { ContextStore } from '../../Context/MainContext';

const Card = ({ playlist, handleOnclick, id, history, istrackList }) => {

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
    if (!istrackList) {
      return handleOnclick(playlist.id, playlist);
    }
    let newPlaylist =[];
    SpotifyApi.getPlaylist(playlist.id, 'spotify').then((tracklist) => {
      tracklist.map((playlist) => {
        return newPlaylist.push(playlist.track);
      })
      console.log(newPlaylist)
      context.updateState('tracks', newPlaylist);
      history.push('/search/tracks')
    })
  }


  return (
    <div className={`Card ${playlist.type === "artist" ? "artist" : "playlist"}`}>
      <div className={`Card-Img ${playlist.type === "artist" ? "artist" : "playlist"}`} >
        {playlist.images[0] ? <img src={playlist.images[0].url} alt="img" /> : "loading"}
      </div>
      <Text name={playlist.name} />
      <ActionOverlay 
        trackAction={() => handleOnclick(id, playlist)} 
        playlist={ playlist.type === "artist" ? "artist" : null }
        onPlayClick={onPlayClick}
        clickOnOverlay={clickOnOverlay}
      />
    </div>
  )
}

export default Card;