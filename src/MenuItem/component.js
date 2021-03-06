import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Textfield, Icon, Tooltip } from 'react-mdl';
//import { canMoveRecipe, moveRecipe } from './';
// import { ItemTypes } from '../Constants';
// import { DropTarget } from 'react-dnd';

// const recipeTarget = {
//   canDrop(props) {
//     return true; //canMoveRecipe(props.x, props.y);
//   },
//
//   drop(props, monitor) {
//     if (props.onDrop) {
//       props.onDrop(props, monitor);
//     }
//   },
// };
//
// function collect(connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver(),
//     canDrop: monitor.canDrop()
//   };
// }

class MenuItem extends Component {

  // renderOverlay(color) {
  //   return (
  //     <div style={{
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       height: '100%',
  //       width: '100%',
  //       zIndex: 1,
  //       opacity: 0.5,
  //       backgroundColor: color,
  //     }} />
  //   );
  // }

  render() {
    //const { connectDropTarget, isOver, canDrop } = this.props;
    var list = this.props.edit ? [] : this.props.menu.recipes.map((m) =>
      <li key={m.id}>
        {m.name}
      </li>
    );

    // return connectDropTarget(
    //   <div style={{
    //     position: 'relative',
    //     width: '100%',
    //     height: '100%'
    //   }}>
    return(
      <div>
        <Textfield>
          {this.props.menu.name}
        </Textfield>
        <ul>{list}</ul>
        <Textfield label="Recipe Name" />
        <Tooltip label="Add">
          <Icon name="add"/>
        </Tooltip>
        {/* {isOver && canDrop && this.renderOverlay('red')} */}
      </div>
    );
  }
}

// MenuItem.propTypes = {
//   isOver: PropTypes.bool.isRequired,
//   canDrop: PropTypes.bool.isRequired,
//   menu: PropTypes.object
// };

// export default DropTarget(ItemTypes.RECIPE, recipeTarget, collect)(MenuItem);
export default MenuItem;
