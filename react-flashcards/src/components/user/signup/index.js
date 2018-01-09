import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'

export default class Signup extends Component {
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
                <input value={'test'} placeholder="email" />
              </label>
              <label className="d-block">
                <input value={'pass'} placeholder="password" type="password" />
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
