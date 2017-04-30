import React, { Component } from 'react';
import './style.css';

import { recipes } from '../InMemoryData/Data';
import { Pagination } from 'react-bootstrap';
import RecipeRow from '../RecipeRow/component';
import MenuForm from '../MenuForm/component';
import RecipeShow from '../RecipeShow/component'

class RecipeBox extends Component {
  render() {
    var store = this.context.getState();
    var itemBox = store.menu && <MenuForm menu={store.menu}/>;
    itemBox = store.recipe && <RecipeShow recipe={store.recipe}/>;
    itemBox = itemBox || <div>nothing to see here</div>;

    return (
      <div className={this.props.className}>
        <div id="master-detail">
          <RecipeList/>
          <div id="item-box">
            {itemBox}
          </div>
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
  funcs: React.PropTypes.object
}

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
