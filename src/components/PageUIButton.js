import React from 'react'
import '../scss/profile-page-ui.scss'

export default class PageUIButton extends React.Component {
  render(){
    return(
      <div className="profile-page-ui-button">
        {this.props.name}
      </div>
    )
  }
}
