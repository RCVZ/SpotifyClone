import React from 'react';
import './ActionOverlay.css';

import PlayButton from '../Buttons/PlayButton/PlayButton';
import AddButton from '../Buttons/AddButton/AddButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';

const ActionOverlay = ({ trackAction, onPlayClick, inPlaylist }) => {
  return (
    <div className="Action-Overlay">
      {inPlaylist ? 
      <DeleteButton onDelete={trackAction} /> : 
      <AddButton onAdd={trackAction} />}
      <PlayButton onPlayClick={onPlayClick}/>
    </div>
  )
}

export default ActionOverlay;