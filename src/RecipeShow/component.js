import React, { Component } from 'react';
import './RecipeShow.css';

class RecipeShow extends Component {
  render() {
    var list = data.map((r) =>
      <RecipeDesc key={r.id} recipe={r}/>
    );
    return (
      <div>
        <RecipeDesc recipe={this.props.recipe} className="recipe-list" >
          {list}
        </RecipeDesc>
        <Steps steps={this.props.recipe.steps}></Steps>
      </div>
    );
  }
}

export default RecipeShow;

class RecipeDesc extends Component {
  render() {
    return (
      <div className="list-box">
        <div className="picture">
          <label>
            {this.props.step.name}
          </label>
          <div>
            <img src={this.props.recipe.picture_url}
              alt={this.props.recipe.name} />
          </div>
        </div>
        <div className="desc">
          {this.props.recipe.desc}
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

class Steps extends Component {
  render() {
    var list = this.props.steps.map( (s) =>
      <Step step={s}></Step>
    );

    return (
      <div className="step-list" >{list}</div>
    );

  }
}

class Step extends Component {
  render() {
    <div>
      <div>{this.props.step.name}</div>
      <Ingredients ingrs={this.props.step.ingredients}></Ingredients>
      <div>
        {this.props.step.instructions}
      </div>
    </div>
  }
}

class Ingredients extends Component {
  render() {
    var list = this.props.ingrs( (i) =>
      <Ingredient ingr={i}></Ingredient>
    );

    return (
      <div className="ing-list" >{list}</div>
    );

  }
}

class Ingredient extends Component {
  render() {
    <div>
      <div>
        {this.props.ingr.amount}
        {this.props.ingr.measurement}
        {this.props.ingr.ingredient}
      </div>z
    </div>
  }
}
