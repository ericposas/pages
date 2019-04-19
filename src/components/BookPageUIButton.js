import React from 'react'
import '../scss/page-ui.scss'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import { connect } from 'react-redux'

class BookPageUIButton extends React.Component {
  constructor(){
    super()
    this.hideInputOfPage = this.hideInputOfPage.bind(this)
  }
  hideInputOfPage(){
    const { bookName, pageName, hideInput_InBook } = this.props
    hideInput_InBook(bookName, pageName)
  }
  render(){
    return (
      <div onClick={this.hideInputOfPage} className="page-ui-inline">
        <div className="page-ui-wrap">
          <div className="page-ui-inner">
            {this.props.pageName}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(BookPageUIButton)
