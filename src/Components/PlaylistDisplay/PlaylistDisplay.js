import React, { PureComponent } from 'react';
import './PlaylistDisplay.css';

import Card from '../Card/Card';
import Button from '../Button/Button';


class PlaylistDisplay extends PureComponent {
  constructor(props){
    super(props);
    this.state= {
      results: 10
    }
  }

  handleOnClick = (e) => {
    this.state.results === 10 ? this.setState({results: 20}) :  this.setState({results: 10});
  }

  render() {
    const { results } = this.state;
    return(
      <div className="PlaylistDisplay">
        <div className="Grid">
          {this.props.playlists
            .slice(0,results)
            .map(playlist => {
              return <Card playlist={playlist} key={playlist.id}/>
            })}
          <div>
            <Button type="button" onClick={this.handleOnClick} name="More....."/>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistDisplay;
