import React, { PureComponent } from 'react';
import './Button.css';


class Button extends PureComponent {
  render() {
    return(
      <React.Fragment>
        <button className="Button" type={this.props.type} onClick={this.props.onClick} >{this.props.name}</button>
      </React.Fragment>
    );
  }
}

export default Button;
