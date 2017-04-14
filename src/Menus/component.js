import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Dispatcher from 'flux';
import { MenuItem } from "../MenuItem/component";
import './style.css';

import { menus } from '../InMemoryData/Data';

class Menus extends Component {
  handleClick(menu) {
    ReactDOM.render(
      <MenuItem menu={menu}/>,
      document.getElementById('item-box')
    );
  }
  render() {
    var list = menus.map( (m) =>
      <div className="menu-item" onClick={() => this.handleClick(m)}>
        {m.name}
      </div>
    );
    list.push(
      <div className="new-menu-item" onClick={() => this.handleClick(null)}>
        (New Menu)
      </div>
    )
    return (
      <div>{list}</div>
    )
  }
}

export default Menus;
