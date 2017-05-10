import React, { Component } from 'react';
import RecipeList from '../RecipeList/component';
import Menus from '../Menus/component';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import './style.css'

class RecipeMenuList extends Component {
  render() {
    const style = {width: "30%"}
    return (
      <div style={style}>
        <Tab.Container id="menus-recipes" defaultActiveKey="recipes">
          <Row>
            <Col sm={12}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="recipes">
                  Recipes
                </NavItem>
                <NavItem eventKey="menus">
                  Menus
                </NavItem>
                {/* <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
                  <MenuItem eventKey="3.1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3.4">Separated link</MenuItem>
                </NavDropdown> */}
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="recipes">
                  <RecipeList/>
                </Tab.Pane>
                <Tab.Pane eventKey="menus">
                  <Menus />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default RecipeMenuList;
