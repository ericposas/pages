import React from 'react'
import '../scss/buttons.scss'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

class AddLinkTextButton_InBook extends React.Component {
  render(){
    const { addInput_InBook, bookName, pageName } = this.props
    return(
      <div onClick={()=>{ addInput_InBook(bookName, pageName) }} className="plus-button-container">
        <div className="plus-button-text">
          <span className="plus-button-symbol">+ </span>
          Add Link / Text
        </div>
      </div>
    )
  }
}

const connected = connect(mSTP, mDTP)(AddLinkTextButton_InBook)

export default connected
