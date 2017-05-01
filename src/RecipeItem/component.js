import React, { Component } from 'react';
import './style.css';

class RecipeItem extends Component {
  render() {
    // var list = data.map((r) =>
    //   <RecipeDesc key={r.id} recipe={r}/>
    // );
    return (
      <div>
        <RecipeDesc recipe={this.props.recipe} />
        <Steps steps={this.props.recipe.steps} />
      </div>
    );
  }
}

export default RecipeItem;

class RecipeDesc extends Component {
  render() {
    return (
      <div className="list-box">
        <div className="picture">
          <label>
            {this.props.recipe.name}
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
      <Step key={s.step} step={s}/>
    );

    return (
      <div className="step-list" >{list}</div>
    );

  }
}

class Step extends Component {
  render() {
    return (
      <div>
        <div>{this.props.step.name}</div>
        <Ingredients ingrs={this.props.step.step_ingredients} />
        <div>
          {this.props.step.instructions}
        </div>
      </div>
    )
  }
}

class Ingredients extends Component {
  render() {
    var list = this.props.ingrs.map( (i) =>
      <Ingredient key={i.seq} ingr={i} />
    );

    return (
      <div className="ing-list" >{list}</div>
    );

  }
}

class Ingredient extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.ingr.amount + ' ' +
            this.props.ingr.measurement + ' ' +
            this.props.ingr.ingredient}
        </div>
      </div>
    )
  }
}
