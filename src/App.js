import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Napbar from './component/Napbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Napbar />
      </div>
    );
  }
}

export default App;
