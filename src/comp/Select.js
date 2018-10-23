import React, { Component } from 'react';
import './Select.css';
class Select extends Component {




  subMenuAlpha = () => {
    this.props.changeButtons(1);
  }


  render() {
    return (
      <div>
      <button className="Select-button"
      onClick={this.subMenuAlpha}>
        {this.props.label}
      </button>

      </div>
    );
  }

}
  

  
  export default Select;


