import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {
  mapDispatchToProps,
  mapStateToProps
} from './login-connector'
import './login.css'

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends Component {
  @autobind
  handleInputEmail(event) {
    this.props.inputUserEmail(event.target.value)
  }
  @autobind
  handleInputPassword(event) {
    this.props.inputUserPassword(event.target.value)
  }
  @autobind
  handleUserLogin(event) {
    event.preventDefault()
    this.props.loginUser()
  }

  render() {
    return (
      <div className="user-entry login justify-content-center m-0 p-0 text-center">
        <div className="card col-md-6 p-0">
          <div className="card-header">
            Login
          </div>
          <div className="card-body">
            <form>
              <label className="d-block">
                <input
                  type="text"
                  onBlur={this.handleInputEmail}
                  placeholder="email" />
              </label>
              <label className="d-block">
                <input
                  onBlur={this.handleInputPassword}
                  placeholder="password"
                  type="password" />
              </label>
            </form>
          </div>
          <Link to="/signup">Don't have an account? Sign up!</Link>
          <div className="card-footer">
            <button
              className="btn btn-main"
              onClick={this.handleUserLogin}
            >Login</button>
          </div>
        </div>
      </div >
    )
  }
}
