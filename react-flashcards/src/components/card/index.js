import React, { Component } from 'react'
import './card.css'

function CardFront({ faceup, children }) {
  return faceup ? children : null
}
function CardBack({ faceup, children }) {
  return faceup ? null : children
}

class Card extends Component {
  static Front = CardFront
  static Back = CardBack
  static defaultProps = { onToggle: () => { } }

  state = { faceup: true }

  toggle = () =>
    this.setState(
      ({ faceup }) => ({ faceup: !faceup }),
      () => this.props.onToggle(this.state.faceup),
    )

  reset = () =>
    this.setState(
      ({ faceup }) => ({ faceup: true }),
      () => this.props.onToggle(this.state.faceup),
    )

  render() {
    const children = React.Children.map(
      this.props.children,
      child =>
        React.cloneElement(child, {
          faceup: this.state.faceup,
          toggle: this.toggle,
        })
    )

    return (
      <div className="card container" onClick={this.toggle} resetCards={this.reset}>
        {children}
      </div>
    )
  }
}

export default Card
