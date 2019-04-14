import React from 'react'
import '../scss/input-style.scss'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'

class Input extends React.Component {
  constructor(){
    super()
  }
  render(){
    const {addTextItem,pageName} = this.props
    return(
      <React.Fragment>
        <input className="input-style" type="text" ref={_=>this._input=_}></input>
        <button onClick={()=>{ addTextItem(pageName,this._input.value) }} className="button-style">Add Text Item</button>
      </React.Fragment>
    )
  }
}

const connected = connect(mSTP, mDTP)(Input)

export default connected
