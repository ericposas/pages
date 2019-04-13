import React from 'react'
import '../scss/plus-button.scss'

export default class PlusButton extends React.Component {
  render(){
    return(
      <div className="plus-button-container">
        <div className="plus-button-text">
          <span className="plus-button-symbol">+ </span>
          Add Link / Text
        </div>
      </div>
    )
  }
}
