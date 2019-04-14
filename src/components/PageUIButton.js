import React from 'react'
import '../scss/profile-page-ui.scss'

export default class PageUIButton extends React.Component {
  render(){
    return(
      <div className="profile-page-ui-inline">
        <div className="profile-page-ui-wrap">
          <div className="profile-page-ui-inner">
            {this.props.name}
          </div>
        </div>
      </div>
    )
  }
}
