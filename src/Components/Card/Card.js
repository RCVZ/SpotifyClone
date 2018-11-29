import React, { PureComponent } from 'react';
import './Card.css';

import Text from '../Text/Text';

class Card extends PureComponent {
  render() {
    return(
      <div className="Card">
        <div>
          <img src={this.props.playlist.images[0].url} alt="img"/>
          <Text name={this.props.playlist.name}/>
        </div>
      </div>
    );
  }
}

export default Card;
