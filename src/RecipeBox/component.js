import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { data, menus } from '../InMemoryData.js';
import { Pagination } from 'react-bootstrap';
import RecipeShow from '../RecipeShow/component';

class RecipeBox extends Component {
  constructor() {
    super();
    this.state = {
      menus: menus,
      selected: 0
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        <div id="master-detail">
          <RecipeList/>
          <div id="item-box">

          </div>
        </div>
        <div className="footer">
          <Footman/>
        </div>
      </div>
    )
  }

}

class RecipeList extends Component {
  render() {
    var list = data.map((r) =>
      <RecipeRow key={r.id} recipe={r}/>
    );
    return (
      <div className="recipe-list" >{list}</div>
    );
  }
}

export default RecipeBox;

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
