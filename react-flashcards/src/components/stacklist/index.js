import React, { Component } from 'react';

const StackList = ({ list }) => (
  <div key={list.id} className="card p-0">
    <div className="stackTitle ">
      {list.title}
    </div>
    <div className="createdDate ">
      {list.numCards}
    </div>
  </div>
)

export default StackList
