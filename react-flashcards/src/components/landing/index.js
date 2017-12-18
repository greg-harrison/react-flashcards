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
    console.log('map', map);
    return map(MockData, (item, index) => {
      console.log('item', item);
      return <Stack item={item} match="" />
    })
  }

  componentDidMount() {
    console.log('test');
  }

  render() {
    return (
      <div className="landing m-0">
        <h1>Hello world</h1>
        {this.landingStackWData()}
      </div>
    )
  }
}

export default Landing
