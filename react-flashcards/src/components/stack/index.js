import React, { Component } from 'react';
import Card from '../card'
import { map } from 'lodash'

const Stack = ({ item, match }) => {

  // Parameters passed through React-Router are stored in the match.params value of the component
  const stackId = match.params.stackId

  let builtStackList = map(
    item.cards,
    (item) => {
      return (
        <Card
          key={item.id}
          card={item}
        />
      )
    }
  )

  return (
    <div>
      {stackId}
      {builtStackList}
    </div>
  )

}

export default Stack
