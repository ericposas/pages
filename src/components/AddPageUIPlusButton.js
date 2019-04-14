import React from 'react'
import '../scss/buttons.scss'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

class AddPageUIPlusButton extends React.Component {
  constructor(){
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    const {showAddPageModal} = this.props
    showAddPageModal()
  }
  render(){
    return(
      <React.Fragment>
        <div onClick={this.clickHandler} className="add-page-plus-button">+</div>
      </React.Fragment>
    )
  }
}

const connected = connect(mSTP, mDTP)(AddPageUIPlusButton)

export default connected
