import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import '../scss/page-delete-button.scss'

class PageDeleteButton extends React.Component {
  constructor(){
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    const { history, context, deletePage, deletePage_inBook, bookName, pageName } = this.props
    if (context === 'Page'){
      deletePage(pageName)
      history.push('/')
    }
    if (context === 'BookPage'){
      deletePage_inBook(bookName, pageName)
      history.push(`/${bookName}`)
    }
  }
  render(){
    return (
      <React.Fragment>
        <div onClick={this.clickHandler} className="page-delete-button-wrapper">
          <div className="page-delete-button-inner-wrapper">
            <div className="page-delete-button">
              <div className="page-delete-button-text-content">
                <span className="page-delete-button-text-context-x">x </span>
                <span className="page-delete-button-text-context-text"> Delete Page</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const connected = connect(mSTP, mDTP)
const routed = withRouter(connected(PageDeleteButton))

export default routed
