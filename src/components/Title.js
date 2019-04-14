import React from 'react'
import styled from 'styled-components'

export default class Title extends React.Component {
  render(){
    const StyledTitle = styled.div`
      color: white;
      font-family: 'Ubuntu';
      font-size: 2em;
      text-align: center;
      padding-top: 20px;
      padding-bottom: 30px;
    `
    return(
      <StyledTitle>{this.props.children}</StyledTitle>
    )
  }
}
