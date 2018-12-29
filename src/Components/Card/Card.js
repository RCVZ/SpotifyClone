import React, { PureComponent } from 'react';
import './Card.css';

import Text from '../Text/Text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

class Card extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      visibility: 'hidden'
    }
  }

  handleMouseEnter = (e) => {
    this.setState({ visibility: 'visible' });    
  }

  handleMouseLeave = (e) => {
    this.setState({ visibility: 'hidden'})    
  }

  render() {
    const { playlist, handleOnclick, id } = this.props;
    return (
      <div className="Card" onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} >
        <div className="Card-Img" onClick={() => handleOnclick(id, playlist.images)} >
          <img src={playlist.images[0].url} alt="img" />
          <Text name={playlist.name} />
        </div>
        <div className="Card-Overlay" style={{ visibility: this.state.visibility }}>
          <div>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <button className="play-pause" onClick={this.onPlayClick} >
            <FontAwesomeIcon className="button" icon={faPlay} size="lg" />
          </button>          
        </div>
      </div>
      )
    }
}

export default Card;