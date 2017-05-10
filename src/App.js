import React, { Component } from 'react';
import logo from './kitchen-utensils.svg';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';
import AppMain from './AppMain'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Whisqir</h2>
        </div>
        <AppMain />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
