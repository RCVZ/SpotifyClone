import React from 'react';
import './PlaylistDisplay.css';

import Card from '../../Components/Card/Card';

const PlaylistDisplay = ({ playlists, traverse, albums, libary, history, istrackList, addToNewPlaylist, addToCurrentPlaylist }) => {
  return (
    <div className="PlaylistDisplay">
      {playlists.map(playlist => {
        return (
          <Card
            addToCurrentPlaylist={addToCurrentPlaylist}
            addToNewPlaylist={addToNewPlaylist}
            playlist={playlist}
            id={playlist.id}
            key={playlist.id}
            history={history}
            istrackList={istrackList}
          />)
      })}
    </div>
  );
}

export default PlaylistDisplay;
