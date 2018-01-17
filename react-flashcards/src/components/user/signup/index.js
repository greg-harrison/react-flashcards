import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {
  mapDispatchToProps,
  mapStateToProps
} from './signup-connector'
import './signup.css'

@connect(mapStateToProps, mapDispatchToProps)
export default class Signup extends Component {
  @autobind
  handleInputName(event) {
    this.props.inputUserName(event.target.value)
  }
  @autobind
  handleInputEmail(event) {
    this.props.inputUserEmail(event.target.value)
  }
  @autobind
  handleInputPassword(event) {
    this.props.inputUserPassword(event.target.value)
  }

  render() {
    return (
      <div className="user-entry signup justify-content-center m-0 p-0 text-center">
        <div className="card col-md-6 p-0">
          <div className="card-header">
            Create an Account
          </div>
          <div className="card-body">
            <form>
              <label className="d-block">
                <input
                  onBlur={this.handleInputName}
                  tabIndex={1}
                  type="text"
                  placeholder="name" />
              </label>
              <label className="d-block">
                <input
                  onBlur={this.handleInputEmail}
                  tabIndex={2}
                  type="text"
                  placeholder="email" />
              </label>
              <label className="d-block">
                <input
                  onBlur={this.handleInputPassword}
                  tabIndex={3}
                  placeholder="password"
                  type="password" />
              </label>
            </form>
          </div>
          <Link
            tabIndex={4}
            to="/login">
            <span>
              Already have an account? Log in!
            </span>
          </Link>
          <div className="card-footer">
            <button
              tabIndex={3}
              className="btn btn-main"
              type="submit"
            >Signup</button>
          </div>
        </div>
      </div>
    )
  }
}
