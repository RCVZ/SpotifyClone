import React from 'react';
import './ActionOverlay.css';

import PlayButton from '../Buttons/PlayButton/PlayButton';
import AddButton from '../Buttons/AddButton/AddButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import OpenButton from '../Buttons/OpenButton/OpenButton';

const ActionOverlay = ({ trackAction, onPlayClick, inPlaylist, playlist, clickOnOverlay }) => {
  return (
    <div className={`Action-Overlay ${playlist === "artist" ? "artist" : "playlist"}`} onClick={clickOnOverlay}>
      {inPlaylist ? <DeleteButton onDelete={trackAction} /> : <AddButton onAdd={trackAction} />}
      <PlayButton onPlayClick={onPlayClick}/>
    </div>
  )
}

export const ActionOverlayOpen = ({ onOpen }) => {
  return (
    <div className="Action-Overlay">
      <OpenButton onOpen={onOpen} />
    </div>
  )
}

export default ActionOverlay
