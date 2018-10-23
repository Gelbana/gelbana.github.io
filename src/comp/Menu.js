import React, { Component } from 'react';
import './Menu.css';
import Select from './Select';

class Menu extends Component {

    constructor() {
        super();
        this.state= {
            currentMenu: 0
        }
    }
 
    changeButtons = (data) => {
      this.setState({currentMenu: data});  
    }

  subMenuAlpha = () => {
    console.log("Clicked");
  }


  render() {
    if(this.state.currentMenu === 0) {
        return (
            <div  className='menu'>
              <Select label={'Alphascape'} changeButtons={this.changeButtons}/>
      
            </div>
          );
    } else if (this.state.currentMenu === 1)
        return (
            <div  className='menu'>
            <Select label={'Chaos'} changeButtons={this.changeButtons}/>
            <Select label={'Midgardsormr'} changeButtons={this.changeButtons}/>
            <Select label={'Omega'} changeButtons={this.changeButtons}/>
            <Select label={'Omega M & F'} changeButtons={this.changeButtons}/>
            <Select label={'Final Omega'} changeButtons={this.changeButtons}/>
    
            </div>
        );
  }



  


}
  

  
  export default Menu;