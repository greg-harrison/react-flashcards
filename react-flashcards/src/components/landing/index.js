import React, { Component } from 'react';
import './landing.css'

class Landing extends Component {

  componentDidMount() {
    console.log('test');
  }

  render() {
    return (
      <div className="landing container m-0">
        <h1>Hello world</h1>
      </div>
    )
  }
}

export default Landing
