import React from 'react'
import '../scss/book-ui-button.scss'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

class BookUIButton extends React.Component {
  render(){
    const {name, books} = this.props
    return(
      <>
        <div className="book-ui-inline">
          <div className="book-ui-wrapper">
            <div className="book-ui-button">{name}</div>
          </div>
        </div>
      </>
    )
  }
}

const connected = connect(mSTP, mDTP)(BookUIButton)

export default connected
