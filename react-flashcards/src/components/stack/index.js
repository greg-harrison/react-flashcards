import React, { Component } from 'react';
import Card from '../card'
import { map } from 'lodash'

const Stack = ({ item }) => {

  // Parameters passed through React-Router are stored in the match.params value of the component
  let builtStackList = map(
    item.cards,
    (item) => {
      return (
        <Card
          key={item.id}>
          <Card.Front>
            <span className="card-side">
              Front
            </span>
            <span className="front">
              {item.front}
            </span>
          </Card.Front>
          <Card.Back>
            <span className="card-side">
              Back
            </span>
            <span className="back">
              {item.back}
            </span>
          </Card.Back>
        </Card>
      )
    }
  )

  return (
    <div>
      {item.title}
      {builtStackList}
    </div>
  )

}

export default Stack
