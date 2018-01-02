import React, { Component } from 'react';
import { map } from 'lodash'

const StackList = ({ list }) => {
  console.log('list', list);
  let stackMap = map(
    list,
    (stack) => {
      // Need to diagnose why this is breaking up the mapped objects instead of mapping them
      console.log('list', list);
      console.log('stack.id', stack.id);
      return (
        <div
          key={stack.id}>
          <div>I'm a stack list</div>
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
