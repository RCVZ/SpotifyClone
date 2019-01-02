import React from 'react';
import './ResultsTracklist.css';

import TrackList from '../TrackList/TrackList';
import Button from '../../Components/Buttons/Button/Button';
import Title from '../../Components/Title/Title';
import Border from '../../Components/Border/Border';

const ResultsTracklist = ({ tracklist, addToPlaylist }) => {
  return (
    <div className="ResultsTracklist" >
      <Title>
        Tracks
      </Title>
      <Button type="button" onClick={console.log('test')} name="More....." />
      <Border />
      <TrackList trackAction={addToPlaylist} tracklist={tracklist}  />
    </div>
  );
}

export default ResultsTracklist;