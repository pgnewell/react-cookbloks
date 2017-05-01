import React, { Component } from 'react';

import RecipeItem from '../RecipeItem/component'
import MenuForm from '../MenuForm/component'

export default class ItemBox extends Component {
  render() {
    console.log('here we are in ItemBox land');
    const { store } = this.context;
    var { item } = store.getState();
    return item.menu ? <MenuForm menu={item.menu}/> :
      item.recipe ? <RecipeItem recipe={item.recipe}/> :
    <div>
      nothing to see here
    </div>
  }
}
ItemBox.contextTypes = {
  store: React.PropTypes.object,
}
