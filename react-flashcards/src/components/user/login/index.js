import React, { Component } from 'react';
import './login.css'

export default class Login extends Component {
  render() {
    return (
      <div className="login justify-content-center m-0 p-0 text-center">
        <div className="card col-md-6 p-0">
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
          <div className="card-footer">
            <button className="btn btn-main" type="submit">Login</button>
          </div>
        </div>
      </div >
    )
  }
}
