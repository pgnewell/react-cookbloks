import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Dispatcher from 'flux';
import MenuItem from "../MenuItem/component";
import './style.css';

import { menus } from '../InMemoryData/Data';

class Menus extends Component {
  handleClick(menu) {
    console.log("here in handleClick land");
    ReactDOM.render(
      <MenuItem menu={menu}/>,
      document.getElementById('item-box')
    );
  }
  render() {
    var list = menus.map( (m) =>
      <div className="menu-item"  key={m.id} onClick={() => this.handleClick(m)}
        style={{cursor: 'pointer'}}>
        {m.name}
      </div>
    );
    list.push(
      <div className="new-menu-item" key={-1} onClick={() => this.handleClick(null)}
        style={{cursor: 'pointer'}}>
        (New Menu)
      </div>
    )
    return (
      <div>{list}</div>
    )
  }
}

export default Menus;
