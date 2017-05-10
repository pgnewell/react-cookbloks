import React, { Component } from 'react';

import RecipeBox from './RecipeBox/component'
import Sidebar from './Sidebar/component'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

const itemReducer = ( state = {}, action ) => {
  switch (action.type) {
    case 'SET_MENU':
      return Object.assign(state, { menu: action.menu });
    case 'SET_RECIPE':
      return Object.assign(state, { menu: action.recipe });
    default:
      return state;
  }
}

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  item: itemReducer // mounted under "form"
})

const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

var itemBoxContext = {};

const funcs = {
  setItem: (itemBox) => {
    itemBoxContext = itemBox;
  },
  getItem: () => {
    return itemBoxContext;
  }
}



export default class AppMain extends Component {
  render() {
    return (
      <Provider store={store}
        funcs={funcs}>
        <div className="app-main">
          <RecipeBox className="recipe-box"/>
          <Sidebar className="sidebar"/>
        </div>
      </Provider>
    );
  }
}
