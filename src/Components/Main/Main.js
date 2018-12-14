import React, { PureComponent } from 'react';
import './Main.css';

import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

import { Switch, Route, withRouter } from "react-router-dom";

class Main extends PureComponent {
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

export default withRouter(Main);
