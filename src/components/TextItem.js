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
    const { content } = this.props
    let trimContent = content.trim()
    let textItem
    // detect .com and make the text a url if so
    trimContent.indexOf('com') > 0 && isUrl(trimContent) === false
    ? trimContent = 'http://' + trimContent
    : trimContent = trimContent
    if(isUrl(trimContent)){
      textItem = <a href={trimContent} target="_blank"><StyledDiv>{trimContent}</StyledDiv></a>
    }else{
      textItem = <StyledDiv>{trimContent}</StyledDiv>
    }
    return(
      <React.Fragment>
        {textItem}
        <br></br>
      </React.Fragment>
    )
  }
}
