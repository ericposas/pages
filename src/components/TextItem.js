import React from 'react'
import styled from 'styled-components'
import '../scss/x-close-button.scss'
import { connect } from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import isUrl from 'is-url'

class TextItem extends React.Component {
  constructor(){
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    const { content, context, deleteTextItem, deleteTextItem_inBook, bookName, pageName } = this.props
    if (context === 'Page') deleteTextItem(content, pageName)
    if (context === 'BookPage') deleteTextItem_inBook(content, bookName, pageName)
  }
  render(){
    const StyledDiv = styled.div`
      margin: 10px;
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
    return (
      <React.Fragment>
        <span onClick={this.clickHandler} className="x-close-button">
          <span className="x-close-inner">x</span>
        </span>{textItem}
        <br></br>
      </React.Fragment>
    )
  }
}

export default connect(mSTP, mDTP)(TextItem)
