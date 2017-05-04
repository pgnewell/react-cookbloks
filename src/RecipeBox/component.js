import React, { Component } from 'react';
import './style.css';

import { Pagination } from 'react-bootstrap';
import ItemBox from '../ItemBox/component'
import RecipeMenuList from '../RecipeMenuList/component'

class RecipeBox extends Component {
  render() {
    // var storeState = this.context.store.getState();
    // var itemBox = storeState.item.menu && <MenuForm menu={storeState.item.menu}/>;
    // itemBox = storeState.item.recipe && <RecipeShow recipe={storeState.item.recipe}/>;
    // itemBox = itemBox || <div>nothing to see here</div>;

    return (
      <div className={this.props.className}>
        <div id="master-detail">
          <RecipeMenuList/>
          <ItemBox />
        </div>
        <div className="footer">
          <Footman/>
        </div>
      </div>
    )
  }
}
RecipeBox.contextTypes = {
  store: React.PropTypes.object,
}

export default RecipeBox;

class Footman extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1
    };
  }

  setLength( length ) {
    this.setState({
      tableLength: length
    })
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={this.state.tableLength || 20}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
};
