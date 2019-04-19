import React from 'react'
import '../scss/input-style.scss'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

class Input_InBook extends React.Component {
  constructor(){
    super()
  }
  render(){
    const { addTextItem_InBook, pageName, bookName } = this.props
    return(
      <React.Fragment>
        <input className="input-style" type="text" ref={_=>this._input=_}></input>
        <button onClick={()=>{ addTextItem_InBook(bookName, pageName, this._input.value) }} className="button-style">Add Text Item</button>
      </React.Fragment>
    )
  }
}

const connected = connect(mSTP, mDTP)(Input_InBook)

export default connected
