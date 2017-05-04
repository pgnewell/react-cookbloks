import React, { Component } from 'react';
import RecipeRow from '../RecipeRow/component';
import { recipes } from '../InMemoryData/Data';

class RecipeList extends Component {
  render() {
    var list = recipes.map((r) =>
      <RecipeRow key={r.id} recipe={r}/>
    );
    return (
      <div className="recipe-list" >{list}</div>
    );
  }
}

export default RecipeList;
