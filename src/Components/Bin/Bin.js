import React, { PureComponent } from 'react';
import BinLogo from './Bin.svg'
import './Bin.css';

class Bin extends PureComponent {    
  handleOnDrop = (e) => {
    this.props.onDrop();
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div className="Bin"
          onDrop={this.handleOnDrop}
          onDragOver={this.onDragOver}>
        <img src={BinLogo} alt="Bin"/>
      </div>
    );
  }
}

export default Bin;
