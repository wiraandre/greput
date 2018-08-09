import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Napbar from './component/Napbar';
import TabBar from './component/TabBar';
import Tabb from './component/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Napbar />
        {/* <TabBar /> */}
        <Tabb />
      </div>
    );
  }
}

export default App;
