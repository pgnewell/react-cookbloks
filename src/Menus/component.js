import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Dispatcher from 'flux';
import MenuForm from "../MenuForm/component";
import './style.css';

import { menus } from '../InMemoryData/Data';

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

class Menus extends Component {
  handleClick(menu) {
    console.log("here in handleClick land");
    ReactDOM.render(
      <MenuForm menu={menu} handleSubmit={showResults}/>,
      document.getElementById('item-box')
    );
  }
  render() {
    const { store } = this.context;
    var list = menus.map( (m) =>
      <div className="menu-item"  key={m.id}
        onClick={() => this.handleClick(m)}
        //   () => store.dispatch({type: 'SET_MENU', menu: m})
        // }
        style={{cursor: 'pointer'}}>
        {m.name}
      </div>
    );
    list.push(
      <div className="new-menu-item" key={-1}
        onClick={() => this.handleClick(null)}
        //   () => store.dispatch({type: 'SET_MENU', menu: null})
        // }
        style={{cursor: 'pointer'}}>
        (New Menu)
      </div>
    )
    return (
      <div>{list}</div>
    )
  }
}
Menus.contextTypes = {
  store: React.PropTypes.object,
}

export default Menus;
