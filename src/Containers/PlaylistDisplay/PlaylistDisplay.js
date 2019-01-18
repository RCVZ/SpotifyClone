import React from 'react';
import './PlaylistDisplay.css';

import Card from '../../Components/Card/Card';

const PlaylistDisplay = ({ playlists, traverse, albums, libary, history, istrackList, handleOnAdd }) => {
  return (
    <div className="PlaylistDisplay">
      {playlists.map(playlist => {
        return (
          <Card
            playlist={playlist}
            id={playlist.id}
            key={playlist.id}
            handleOnAdd={handleOnAdd}
            history={history}
            istrackList={istrackList}
          />)
      })}
    </div>
  );
}

export default PlaylistDisplay;
