import React, { Component, PropTypes } from 'react';
//import { canMoveRecipe, moveRecipe } from './';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';

const recipeTarget = {
  canDrop(props) {
    return true; //canMoveRecipe(props.x, props.y);
  },

  drop(props) {

  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class MenuItem extends Component {

  renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

  render() {
    const { connectDropTarget, isOver, canDrop } = this.props;
    var list = this.props.menu.recipes.map((m) =>
      <li>
        m.name
      </li>
    );

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <p>
          {this.props.menu.name}
        </p>
        <ul>{list}</ul>
        {isOver && canDrop && this.renderOverlay('red')}
      </div>
    );
  }
}

MenuItem.propTypes = {
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  menu: PropTypes.object
};

export default DropTarget(ItemTypes.RECIPE, recipeTarget, collect)(MenuItem);
