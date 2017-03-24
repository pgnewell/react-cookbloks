import React, { Component } from 'react';
import './style.css';
import { data, menus } from '../InMemoryData.js';
import { Table, Pagination } from 'react-bootstrap';

const RecipeBox = React.createClass({
  getInitialState() {
    return {
      menus: menus,
      selected: 1
    };
  },

  render() {
    return (
      <div className="list-box">
        <div className="left-column">
          <RecipeList/>
        </div>
        <div className="middle-column">

        </div>
        <div className="footer">
          <Footman/>
        </div>
      </div>
    )
  }
});

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
  render() {
    return (
      <Table>
        <tbody>

          <tr>
            <td rowSpan="3" className="picture">
              <img src={this.props.recipe.picture_url} alt={this.props.recipe.name} />
            </td>
            <td className="name">
              {this.props.recipe.name}
            </td>
          </tr>
          <tr>
            <td className="auth">
              {this.props.recipe.author}
            </td>
          </tr>
          <tr>
            <td className="desc">
              {this.props.recipe.desc}
            </td>
          </tr>
        </tbody>
      </Table>
      //
      // <Grid>
      //   <Row>
      //     <Col lg={1} sm={1} md={1} >
      //     </Col>
      //   </Row>
      //   <Row>
      //
      //   </Row>
      //   <Row>
      //
      //   </Row>
      // </Grid>
      // <div className="list-box">
      //   <div className="picture">
      //     <img src={this.props.recipe.picture_url} alt={this.props.recipe.name} />
      //   </div>
      //   <div className="name">
      //     {this.props.recipe.name}
      //   </div>
      //   <div className="auth">
      //     {this.props.recipe.author}
      //   </div>
      //   <div className="desc">
      //     {this.props.recipe.desc}
      //   </div>
      //   <div className="clear"></div>
      // </div>
    );
  }
}

const Footman = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  setLength( length ) {
    this.setState({
      tableLength: length
    })
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },

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
});
