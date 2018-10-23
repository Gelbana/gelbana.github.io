import React, { Component } from 'react';
import logo from './res/BLM.svg';
import './App.css';
import Menu from './comp/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            JP PUG Strategy Rundown
          </p>
          
        <Menu />
        </header>
      </div>
    );
  }
}

export default App;
