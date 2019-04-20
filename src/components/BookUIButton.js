import _ from 'lodash'
import React from 'react'
import '../scss/book-ui-button.scss'
import {connect} from 'react-redux'
import { DropTarget } from 'react-dnd'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

const itemDrop = {
  drop(props, monitor){
    const { books, addPageToExistingBook, unsetPageAdded } = props
    const bookName = props.name
    const pageName = monitor.getItem().name
    if (!_.includes(Object.keys(books[bookName]), pageName)) {
      addPageToExistingBook(bookName, pageName)
      unsetPageAdded()
    }else{
      // PUT WARNING MODAL HERE
      console.log('page already exists in collection!')
    }
  }
}

function targetCollect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class BookUIButton extends React.Component {
  render(){
    const {name, books, connectDropTarget} = this.props
    return connectDropTarget(
      <div className="book-ui-inline">
        <div className="book-ui-wrapper">
          <div className="book-ui-button">{name}</div>
        </div>
      </div>
    )
  }
}

export default _.flow(
  // if this had a DragSource, it would be 'BOOK'
  // if BookUIButton was draggable, its .getItemType() would be 'BOOK'
  DropTarget('PAGE', itemDrop, targetCollect), // accepts 'PAGE'
  connect(mSTP, mDTP)
)(BookUIButton)
