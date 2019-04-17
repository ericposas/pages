import React from 'react'
import styled from 'styled-components'
import isUrl from 'is-url'

export default class TextItem extends React.Component {
  render(){
    const StyledDiv = styled.div`
      margin: 4px;
      margin-left: 20px;
      font-weight: bold;
      font-family: Ubuntu
      display: inline-block;
      color: cornflowerblue;
    `
    const {content} = this.props
    let textItem
    if(isUrl(content)){
      textItem = <a href={content} target="_blank"><StyledDiv>{content}</StyledDiv></a>
    }else{
      textItem = <StyledDiv>{content}</StyledDiv>
    }

    return(
      <React.Fragment>
        {textItem}
        <br></br>
      </React.Fragment>
    )
  }
}
