import React from 'react'
import '../scss/page-ui.scss'

export default class PageUIButton extends React.Component {
  render(){
    return(
      <div className="page-ui-inline">
        <div className="page-ui-wrap">
          <div className="page-ui-inner">
            {this.props.name}
          </div>
        </div>
      </div>
    )
  }
}
