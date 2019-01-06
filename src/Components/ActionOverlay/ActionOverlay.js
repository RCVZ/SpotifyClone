import React from 'react';
import './ActionOverlay.css';

import PlayButton from '../Buttons/PlayButton/PlayButton';
import AddButton from '../Buttons/AddButton/AddButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';

const ActionOverlay = ({ trackAction, onPlayClick, inPlaylist, playlist }) => {
  return (
    <div className={`Action-Overlay ${playlist === "artist" ? "artist" : null}`}>
      {inPlaylist ? <DeleteButton onDelete={trackAction} /> : <AddButton onAdd={trackAction} />}
      <PlayButton onPlayClick={onPlayClick}/>
    </div>
  )
}

export default ActionOverlay;