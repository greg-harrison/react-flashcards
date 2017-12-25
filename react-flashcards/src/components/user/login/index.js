import React, { Component } from 'react';
// import './login.css'

export default class Login extends Component {
  render() {
    return (
      <div className="justify-content-center m-0 p-0 text-center">
        <div className="card col-md-6">
          <form>
            <label class="d-block">
              <input value={'test'} placeholder="email" />
            </label>
            <label class="d-block">
              <input value={'pass'} placeholder="password" type="password" />
            </label>
          </form>
        </div>
      </div>
    )
  }
}
