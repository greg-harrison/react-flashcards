import React from 'react';
import Card from '../card'
import { Link } from 'react-router-dom';
import { map } from 'lodash'
import MockData from '../landing/MockData'
import Header from '../base_components/header'
import './stack.css'

// To be Connected by redux

export default class Stack extends React.Component {
  constructor(props) {
    super(props)

    this.state = Object.assign({}, {
      reset: false
    })

    this.resetCardsMethod = this.resetCardsMethod.bind(this)
  }

  resetCardsMethod() {
    console.log('this thing');
    this.setState({ reset: true })
  }

  render() {
    let builtStackList = map(
      MockData[0].cards,
      (item) => {
        return (
          <Card
            resetCards={this.state.reset}
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
      <div className="stackPage">
        <div>
          <Header isLoggedIn={true}>
            <Link
              to={'/'}
            >
              Back to Home
        </Link>
          </Header>
        </div>
        <div className="stackTitle">{MockData[0].title}</div>
        <p><button onClick={this.resetCardsMethod}>Reset All</button> - Might need to actually have a constructor and state to handle this</p>
        {builtStackList}
      </div>
    )
  }
}

