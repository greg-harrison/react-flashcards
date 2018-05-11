import React from 'react';
import Card from '../card'
import { Link } from 'react-router-dom';
import { map } from 'lodash'
import MockData from '../landing/MockData'
import Header from '../base_components/header'

// To be Connected by redux
const Stack = () => {
  let builtStackList = map(
    MockData[0].cards,
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
      <div>
        <Header isLoggedIn={true}>
          <Link
            to={'/'}
          >
            Back to Home
        </Link>
        </Header>
      </div>
      {MockData[0].title}
      {builtStackList}
    </div>
  )

}


export default Stack
