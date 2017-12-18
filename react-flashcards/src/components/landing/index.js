import React, { Component } from 'react';
import './landing.css'
import Stack from '../stack'
import { map } from 'lodash'
import MockData from './MockData'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.landingStackWData = this.landingStackWData.bind(this)
  }

  landingStackWData() {
    return map(MockData, (item, index) => {
      return <Stack item={item} />
    })
  }

  render() {
    return (
      <div className="landing m-0">
        {this.landingStackWData()}
      </div>
    )
  }
}

export default Landing
