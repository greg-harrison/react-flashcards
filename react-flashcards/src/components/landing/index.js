import React, { Component } from 'react';
import './landing.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Stack from '../stack'
import { map } from 'lodash'
import MockData from './MockData'
import MockStackList from './MockStackList'
import StackList from '../stacklist'
import Header from '../base_components/header'

class Landing extends Component {
  static propTypes = {
    auth: PropTypes.object
  }

  constructor(props) {
    super(props)

    console.log('props', props);

    this.landingUserStacks = this.landingUserStacks.bind(this)
  }

  landingUserStacks() {
    return map(MockStackList, (item, index) => {
      return <StackList list={item} />
    })
  }

  render() {
    return (
      <div className="landing w-100 m-0">
        <Header isLoggedIn={true}>
          <Link
            to={'/'}
          >
            Back to Home
        </Link>
        </Header>
        {this.landingUserStacks()}
      </div>
    )
  }
}

export default Landing
