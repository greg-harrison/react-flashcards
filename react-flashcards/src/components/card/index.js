import React, { Component } from 'react'
import CardTitle from './cardTitle'

class Card extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div className="card container m-0">
        <CardTitle title={this.props.card.title} />
        <p>{this.props.card.front}</p>
        <p>{this.props.card.back}</p>
      </div>
    )
  }
}

export default Card
