import React from 'react'
import {withRouter} from 'react-router'
import '../scss/back-to-pages.scss'

class BackToMainButton extends React.Component {
  constructor(){
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    const {history} = this.props
    history.push('/')
  }
  render(){
    return(
      <React.Fragment>
        <div className="back-to-all-pages-button-wrapper">
          <div onClick={this.clickHandler} className="back-to-all-pages-button">&#60; All Pages</div>
        </div>
      </React.Fragment>
    )
  }
}

const routedComponent = withRouter(BackToMainButton)

export default routedComponent
