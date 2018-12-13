import React, { Component } from 'react';
import './Main.css';

import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

import { Switch, Route } from "react-router-dom";

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
          <Route path="/current-playlist" component={PlayList} />
          <Route path="/search" component={SearchResults} />
        </Switch>
      </div>
    );
  }
}

export default Main;
