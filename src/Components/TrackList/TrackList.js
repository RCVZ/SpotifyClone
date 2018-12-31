import React, { PureComponent } from 'react';
import './TrackList.css'

import Track from '../Track/Track';
import Grid from '../Grid/Grid';

class TrackList extends PureComponent {

  getUrisList = () => {
    const newList = []; 
    this.props.trackList.map((track) => newList.push(track.uri));  
    return newList;
  }

  render() {
    const { trackAction, inPlaylist, trackList  } = this.props;
    return (
        <Grid>
          {trackList.map((track, index) => {
            return (
              <Track
                track={track}
                trackIndex={index}
                id={index}
                key={track.id}
                trackAction={trackAction}
                inPlaylist={inPlaylist}
                getUrisList={this.getUrisList}
              />
            )
          })
          }
        </Grid>  
    );
  }
}


export default TrackList;
