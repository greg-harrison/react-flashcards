import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const StackList = ({ list }) => (
  <Link
    to={'/stack/' + list.id}
    key={list.id}
    className="card p-3" >
    <div className="stackTitle ">
      {list.title}
    </div>
    <div className="createdDate ">
      {list.numCards}
    </div>
  </Link >
)

export default StackList
