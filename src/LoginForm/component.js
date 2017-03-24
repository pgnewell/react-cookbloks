import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
        <form id="login-form" >
          Username:<br/>
          <input type="text" name="username" size="20" /><br/>
          Password:<br/>
          <input type="password" name="password" size="20" /><br/>
          <input type="submit" name="submit" value="Submit" />
        </form>
    );
  }
}
export default LoginForm;
