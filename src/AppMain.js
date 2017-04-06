import React, { Component } from 'react';

import RecipeBox from './RecipeBox/component'
import Sidebar from './Sidebar/component'

export default class AppMain extends Component {
  render() {
    return (
      <div className="App-main">
        <RecipeBox className="recipe-box"/>
        <Sidebar className="sidebar"/>
      </div>
    );
  }
}
