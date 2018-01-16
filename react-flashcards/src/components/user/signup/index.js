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
                  type="text"
                  placeholder="name" />
              </label>
              <label className="d-block">
                <input
                  onBlur={this.handleInputEmail}
                  type="text"
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
          <Link to="/login">Already have an account? Log in!</Link>
          <div className="card-footer">
            <button className="btn btn-main" type="submit">Signup</button>
          </div>
        </div>
      </div >
    )
  }
}
