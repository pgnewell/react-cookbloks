import React, { Component } from 'react';

class RegisterForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-body">
            <form id="register-form" method="POST" action="#" role="form">
              <div className="form-group">
                <h2>Create account</h2>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="signupName">
                  Your name
                </label>
                <input id="signupName" maxlength="50"
                  className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="signupEmail">
                  Email
                </label>
                <input id="signupEmail" maxlength="50"
                  className="form-control" type="email"/>
              </div>
              <div className="form-group">
                <label className="control-label"
                    htmlFor="signupEmailagain">
                  Email again
                </label>
                <input id="signupEmailagain" maxlength="50"
                  className="form-control" type="email"/>
              </div>
              <div className="form-group">
                <label className="control-label"
                    htmlFor="signupPassword">
                  Password
                </label>
                <input id="signupPassword" maxlength="25"
                  className="form-control"
                  placeholder="at least 6 characters" length="40"
                  type="password"/>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="signupPasswordagain">
                  Password again
                </label>
                <input id="signupPasswordagain" maxlength="25"
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
      </div>
    );
  }
}
export default RegisterForm;
