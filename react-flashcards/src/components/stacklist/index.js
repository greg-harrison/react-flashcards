import React, { Component } from 'react';
import { map } from 'lodash'

const StackList = ({ list }) => {
  let stackMap = map(
    list,
    (stack) => {
      console.log('stack', stack);
      return (
        <div
          key={stack.id}>
          <div>I'm a stack</div>
          <div
            className="stackTitle col-6">
            {stack.title}
          </div>
          <div
            className="createdDate col-6">
            {stack.numCards}
          </div>
        </div>
      )
    }
  )

  return (
    <div>
      {stackMap}
    </div>
  )
}

export default StackList
