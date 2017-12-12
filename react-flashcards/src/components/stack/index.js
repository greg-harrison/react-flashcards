import React, { Component } from 'react';
import Card from '../card'
import { map } from 'lodash'

const Stack = ({ match }) => {

  // Parameters passed through React-Router are stored in the match.params value of the component
  const stackId = match.params.stackId

  let stackItems = []

  let pretendInitialCard = {
    id: '2032302-a200320-29312aslj',
    title: 'Pretend Card',
    front: 'Functional Component',
    back: 'A pattern for writing a React component as a Pure Function. Pro: Very performant. Con: No access to lifecycle methods.'
  }

  stackItems.push(pretendInitialCard)

  let builtStackList = map(
    stackItems,
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
