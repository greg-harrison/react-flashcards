import React, { Component } from 'react';
import './landing.css'
import Stack from '../stack'
import { map } from 'lodash'
import MockData from './MockData'
import MockStackList from './MockStackList'
import StackList from '../stacklist'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.landingStackWData = this.landingStackWData.bind(this)
    this.landingUserStacks = this.landingUserStacks.bind(this)
  }

  landingStackWData() {
    return map(MockData, (item, index) => {
      return <Stack item={item} />
    })
  }

  landingUserStacks() {
    return map(MockStackList, (item, index) => {
      console.log('test');
      console.log('item', item);
      return <StackList list={item} />
    })
  }

  render() {
    return (
      <div className="landing m-0">
        {this.landingUserStacks()}
      </div>
    )
  }
}

export default Landing
