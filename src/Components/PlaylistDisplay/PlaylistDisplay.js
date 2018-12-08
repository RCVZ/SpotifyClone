import React, { PureComponent } from 'react';
import './PlaylistDisplay.css';

import Card from '../Card/Card';
import Button from '../Button/Button';

import SpotifyApi from './../../util/Spotify';

class PlaylistDisplay extends PureComponent {
  constructor(props){
    super(props);
    this.state= {
      results: 10
    }
  }

  handleOnMore = (e) => {
    this.state.results === 10 ? this.setState({results: 20}) :  this.setState({results: 10});
  }

  handleOnclick = (key) => {
    //console.log(e.target);
    console.log(key);
    SpotifyApi.getPlaylist(key, 'spotify').then((item)=>console.log(item));     
  }

  render() {
    const { results } = this.state;
    return(
      <div className="PlaylistDisplay">
        <div className="Grid">
          {this.props.playlists
            .slice(0,results)
            .map(playlist => {
              return <Card playlist={playlist} id={playlist.id} key={playlist.id} handleOnclick={this.handleOnclick}/>
            })}
          <div>
            <Button type="button" onClick={this.handleOnMore} name="More....."/>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistDisplay;
