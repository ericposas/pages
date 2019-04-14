import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import '../scss/back-to-pages.scss'

class BackToMainButton extends React.Component {
  constructor(){
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    const {history, showPageUIButtons} = this.props
    history.push('/')
    showPageUIButtons()
  }
  render(){
    const {location, showPageUIButtons} = this.props
    return(
      <React.Fragment>
        {
          location.pathname === '/'
          ? showPageUIButtons()
          : null
        }
        <div className="back-to-all-pages-button-wrapper">
          <div onClick={this.clickHandler} className="back-to-all-pages-button">&#60; All Pages</div>
        </div>
      </React.Fragment>
    )
  }
}

const routedComponent = withRouter(connect(mSTP, mDTP)(BackToMainButton))

export default routedComponent
