import React from 'react'
import styled from 'styled-components'

export default class Title extends React.Component {
  render(){
    const StyledTitle = styled.div`
      color: white;
      font-family: 'Ubuntu';
      font-size: 1.5em;
      text-align: center;
      padding-top: 20px;
      padding-bottom: 30px;
    `
    return(
      <StyledTitle style={this.props.styleOverride}>{this.props.children}</StyledTitle>
    )
  }
}
