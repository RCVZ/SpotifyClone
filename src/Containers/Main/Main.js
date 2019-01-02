import React, { PureComponent } from 'react';
import './Main.css';

import { Switch, Route, withRouter } from "react-router-dom";

class Main extends PureComponent {
  render() {
    return(
      <div className="Main">
        <Switch>
          <Route path="/search" render={() => (<React.Fragment>{this.props.children[0]}</React.Fragment>)}/>
          <Route path="/currentPlaylist" render={() => (<React.Fragment>{this.props.children[1]}</React.Fragment>)} />
          <Route path="/newPlaylist" render={() => (<React.Fragment>{this.props.children[2]}</React.Fragment>)} />
          <Route path="/library" render={() => (<React.Fragment>{this.props.children[3]}</React.Fragment>)} />
          <Route path="/userPlaylists" render={() => (<React.Fragment>{this.props.children[4]}</React.Fragment>)} />
        </Switch> 
      </div>
    );
  }
}

export default withRouter(Main);
