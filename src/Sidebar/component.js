import React, { Component } from 'react';
import { Accordion, Panel} from 'react-bootstrap';
import './style.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import LoginForm from '../LoginForm/component.js';
import RegisterForm from '../RegisterForm/component.js';
import Menus from '../Menus/component.js';

class Sidebar extends Component {
  render() {
    // var message = "";
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(),
      today.getDate() - 7);

    return (
      <div className={this.props.className}>
        <Accordion>
          <Panel header="Login" eventKey="0">
            <LoginForm/>
          </Panel>
      		<Panel header="Register" eventKey="1">
            <RegisterForm/>
    			</Panel>
    			<Panel header="Create Menus" eventKey="2">
            <Menus/>
    			</Panel>
    			<Panel header="Calendar" eventKey="3">
            <InfiniteCalendar
              width={'100%'}
              height={300}
              selected={today}
              minDate={lastWeek}
            />
    			</Panel>
    			<Panel header="Shopping" eventKey="4">
    			</Panel>
        </Accordion>

      </div>
    );
  }
}

export default Sidebar;
