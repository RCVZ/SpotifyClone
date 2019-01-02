import React from 'react';
import './Albumslist.css';

import PlaylistDisplay from '../../Containers/PlaylistDisplay/PlaylistDisplay';
import Button from '../../Components/Buttons/Button/Button';
import Title from '../../Components/Title/Title';
import Border from '../../Components/Border/Border';

const Albumslist = ({ albums, addToCurrentPlaylist })  => {
  return(
    <div className="Albumslist" >
      <Title>
        Albums
      </Title>
      <Button type="button" onClick={console.log('test')} name="More....." />
      <Border />
      <PlaylistDisplay addToCurrentPlaylist={addToCurrentPlaylist} playlists={albums} albums />
    </div>
  );
}

export default Albumslist;