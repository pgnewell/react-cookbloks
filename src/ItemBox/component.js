import React, { Component } from 'react';

import RecipeItem from '../RecipeItem/component'
import MenuForm from '../MenuForm/component'
import './style.css';

export default class ItemBox extends Component {
  render() {
    const { store } = this.context;
    var { item } = store.getState();
    return item.menu ? <MenuForm id='item-box' menu={item.menu}/> :
      item.recipe ? <RecipeItem id='item-box' recipe={item.recipe}/> :
    <div id='item-box'>
      nothing to see here
    </div>
  }
}
ItemBox.contextTypes = {
  store: React.PropTypes.object,
}
