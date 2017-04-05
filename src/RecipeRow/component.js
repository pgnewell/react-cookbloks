import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';
import RecipeShow from '../RecipeShow/component';

const recipeSource = {
  beginDrag(props) {
    return {recipe: props.recipe};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class RecipeRow extends Component {
  handleClick(recipe) {
    ReactDOM.render(
      <RecipeShow recipe={recipe}/>,
      document.getElementById('item-box')
    );
  }
  render() {
    const thisStyle={ float: 'left' };
    const clearStyle={ clear: 'both' };
    return (
      // <div>
      //   <div style={thisStyle}>
      //     <img src={this.props.recipe.picture_url} alt={this.props.recipe.name} />
      //   </div>
      //   <div style={thisStyle}>
      //     <div>{this.props.recipe.name}</div>
      //     <div>{this.props.recipe.author}</div>
      //     <div>{this.props.recipe.desc}</div>
      //   </div>
      //   <div style={clearStyle}></div>
      // </div>
      <div className="recipe-row" onClick={() => this.handleClick(this.props.recipe)}>

        <div className="picture" style={thisStyle}>
          <img src={this.props.recipe.picture_url} alt={this.props.recipe.name} />
        </div>
        <div style={thisStyle}>
          <div className="name">
            {this.props.recipe.name}
          </div>
          <div className="auth">
            {this.props.recipe.author}
          </div>
          <div className="desc">
            {this.props.recipe.desc}
          </div>
        </div>
        <div className="clear" style={clearStyle}></div>
      </div>
    );
  }
}

RecipeRow.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.RECIPE, recipeSource, collect)(RecipeRow);
