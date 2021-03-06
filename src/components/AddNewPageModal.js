import React from 'react'
import '../scss/new-page-input-modal.scss'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

class AddNewPageModal extends React.Component {
  constructor(){
    super()
    this.addNewPage = this.addNewPage.bind(this)
    this.pageModal = this.pageModal.bind(this)
  }
  pageModal(){
    const {hideAddPageModal} = this.props
    hideAddPageModal()
  }
  addNewPage(input){
    const {addPage, hideAddPageModal} = this.props
    addPage(input)
    hideAddPageModal()
  }
  render(){
    const {pageHeight} = this.props
    return(
      <React.Fragment>
        <div onClick={this.pageModal} className="dimmer-screen"></div>
        <div className="new-page-input-modal">
          <div className="new-page-input-label">What will your new page be called?</div>
          <input type="text" ref={_=>this._input=_}></input>
          <br></br>
          <button onClick={()=>{this.addNewPage(this._input.value)}} className="new-page-input-button">Add Page</button>
        </div>
      </React.Fragment>
    )
  }
}

const connected = connect(mSTP, mDTP)(AddNewPageModal)

export default connected
