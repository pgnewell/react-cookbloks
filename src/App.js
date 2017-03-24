import React, { Component } from 'react';
import logo from './kitchen-utensils.svg';
import './App.css';
import RecipeBox from './RecipeBox/component'
import Sidebar from './Sidebar/component'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to CookBloks</h2>
        </div>
        <RecipeBox/>
        <Sidebar/>
     </div>
    );
  }
}

export default App;
