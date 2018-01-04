import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './stackList.css';

const StackList = ({ list }) => (
  <div className="stackListItem card p-0">
    <Link
      to={'/stack/' + list.id}
      className="row p-3"
      key={list.id}>
      <span className="stackTitle col-6">
        {list.title}
      </span>
      <span className="createdDate col-6 text-right">
        Count: {list.numCards}
      </span>
    </Link >
  </div>
)

export default StackList
