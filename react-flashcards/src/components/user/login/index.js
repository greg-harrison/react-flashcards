import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

export default class Login extends Component {
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
                <input value={'test'} placeholder="email" />
              </label>
              <label className="d-block">
                <input value={'pass'} placeholder="password" type="password" />
              </label>
            </form>
          </div>
          <Link to="/signup">Don't have an account? Sign up!</Link>
          <div className="card-footer">
            <button className="btn btn-main" type="submit">Login</button>
          </div>
        </div>
      </div >
    )
  }
}
