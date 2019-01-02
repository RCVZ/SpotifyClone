import React from 'react';
import './Playlists.css';

import Button from '../../Components/Buttons/Button/Button';
import Title from '../../Components/Title/Title';
import Border from '../../Components/Border/Border';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';

const Playlists = ({ playlists, addToCurrentPlaylist }) => {
  return (
    <div className="Playlists" >
      <Title>
        Playlists
      </Title>
      <Button type="button" onClick={console.log('test')} name="More....." />
      <Border />
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={playlists} albums />
    </div>
  );
}

export default Playlists;