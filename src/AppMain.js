import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import RecipeBox from './RecipeBox/component'
import Sidebar from './Sidebar/component'

class AppMain extends Component {
  render() {
    return (
      <div className="App-main">
        <RecipeBox className="recipe-box"/>
        <Sidebar className="sidebar"/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(AppMain);
