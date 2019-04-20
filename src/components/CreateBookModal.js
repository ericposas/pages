import _ from 'lodash'
import React from 'react'
import '../scss/create-book-input-modal.scss'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

class CreateBookModal extends React.Component {
  constructor(){
    super()
    this.addNewBook = this.addNewBook.bind(this)
    this.bookModal = this.bookModal.bind(this)
  }
  bookModal(){
    const { hideCreateBookModal } = this.props
    hideCreateBookModal()
  }
  addNewBook(input){
    const { books, mergePages, pagesToBeMerged, hideCreateBookModal } = this.props
    const cleanInput = input.trim()
    if (input === '') {
      // PUT WARNING MODAL HERE
      console.log('provide a name for your new book!')
    }else if (!_.includes(Object.keys(books), cleanInput)) {
      mergePages(cleanInput)
    }else{
      // PUT WARNING MODAL HERE 
      console.log('book already exists!')
    }
    hideCreateBookModal()
  }
  render(){
    const {pageHeight} = this.props
    return(
      <React.Fragment>
        <div onClick={this.bookModal} className="dimmer-screen"></div>
        <div className="create-book-input-modal">
          <div className="create-book-input-label">What will your new collection of pages be called?</div>
          <input type="text" ref={_=>this._input=_}></input>
          <br></br>
          <button onClick={()=>{this.addNewBook(this._input.value)}} className="create-book-input-button">Add Book</button>
        </div>
      </React.Fragment>
    )
  }
}

const connected = connect(mSTP, mDTP)(CreateBookModal)

export default connected
