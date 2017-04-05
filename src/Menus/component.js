import React, { Component } from 'react';
// import Dispatcher from 'flux';
import './style.css';

import { menus } from '../InMemoryData';

class Menus extends Component {
  render() {
    var list = menus.map( (m) =>
      <div className="menu-item">
        {m.name}
      </div>
    );
    list.push(
      <div className="new-menu-item">
        (New Menu)
      </div>
    )
    return (
      <div>{list}</div>
    )
  }
}

export default Menus;
