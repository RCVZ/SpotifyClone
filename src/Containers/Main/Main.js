import React, { PureComponent, cloneElement } from 'react';
import './Main.css';

import { Switch, Route } from "react-router-dom";

class Main extends PureComponent {

  render() {
    const { loadOnScroll } = this.props;
    return(
      <div className="Main" onScroll={loadOnScroll} >
        <Switch>
          <Route path="/search" render={() => this.props.children[0]}/>
          <Route path="/currentPlaylist" render={() => this.props.children[1]} />
          <Route path="/newPlaylist" render={() => this.props.children[2]} />
          <Route path="/library" render={() => this.props.children[3]} />
          <Route path="/userPlaylists" render={() => this.props.children[4]} />
        </Switch> 
      </div>
    );
  }
}

export default Main;
