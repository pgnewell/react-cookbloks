import React, { Component } from 'react';
import './style.css';

class RegisterForm extends Component {
  render() {
    return (
      <div className="side-container">
        <div className="panel panel-primary">
          <form id="register-form" className="panel-body" method="POST" action="#" role="form">
            <div className="form-group">
              <h2>Create account</h2>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="signupName">
                Your name
              </label>
              <input id="signupName" maxLength="50"
                className="form-control" type="text"/>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="signupEmail">
                Email
              </label>
              <input id="signupEmail" maxLength="50"
                className="form-control" type="email"/>
            </div>
            <div className="form-group">
              <label className="control-label"
                  htmlFor="signupEmailagain">
                Email again
              </label>
              <input id="signupEmailagain" maxLength="50"
                className="form-control" type="email"/>
            </div>
            <div className="form-group">
              <label className="control-label"
                  htmlFor="signupPassword">
                Password
              </label>
              <input id="signupPassword" maxLength="25"
                className="form-control"
                placeholder="at least 6 characters" 
                type="password"/>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="signupPasswordagain">
                Password again
              </label>
              <input id="signupPasswordagain" maxLength="25"
                className="form-control" type="password"/>
            </div>
            <div className="form-group">
              <button id="signupSubmit" type="submit"
                className="btn btn-info btn-block">
                Create your account
              </button>
            </div>
            <p className="form-group">
              By creating an account, you agree to our
              <a href="#">Terms of Use</a>
              and our
              <a href="#">Privacy Policy</a>.
            </p>
            <hr/>
            <p>Already have an account? <a href="#">Sign in</a></p>
          </form>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
