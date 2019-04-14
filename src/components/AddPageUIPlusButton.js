import React from 'react'
import '../scss/buttons.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
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
    const {showAddPageModal, showPageUIButtons, history} = this.props
    showAddPageModal()
    showPageUIButtons()
    history.push('/')
  }
  render(){
    const {pageUIButtonsVisible} = this.props
    return(
      <React.Fragment>
        <div className="add-page-plus-button-wrapper">
          <div onClick={this.clickHandler} className="add-page-plus-button">+</div>
        </div>
      </React.Fragment>
    )
  }
}

const connected = withRouter(connect(mSTP, mDTP)(AddPageUIPlusButton))

export default connected
