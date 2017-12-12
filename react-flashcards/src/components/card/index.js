import React, { Component } from 'react'
import CardTitle from './cardTitle'

class Card extends Component {
  render() {
    return (
      <div className="card container m-0">
        <CardTitle title="Test" />
        <h1>Hello world</h1>
      </div>
    )
  }
}

export default Card
