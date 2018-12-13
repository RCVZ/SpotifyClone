import React, { Component } from 'react';
import './Main.css';

import { connect } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'searchResults'
    }
  }


  render() {
    return(
      <div className="Main">
        <Switch>
          <Route path="/current-playlist" render={(props) => (<PlayList deleteTrack={this.deleteTrack} setPlayListName={this.setPlayListName} savePlayList={this.savePlayList} {...props} />)} />
          <Route path="/search" render={(props) => (<SearchResults addToPlaylist={this.addToPlaylist} {...props} />)} />
        </Switch>
      </div>
    );
  }
}

export default Main;
