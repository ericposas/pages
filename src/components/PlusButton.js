import React from 'react'
import '../scss/buttons.scss'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

class PlusButton extends React.Component {
  render(){
    const {addInput,pageName} = this.props
    return(
      <div onClick={()=>{ addInput(pageName) }} className="plus-button-container">
        <div className="plus-button-text">
          <span className="plus-button-symbol">+ </span>
          Add Link / Text
        </div>
      </div>
    )
  }
}

const connected = connect(mSTP, mDTP)(PlusButton)

export default connected
