import uuid from 'uuid'
import React from 'react'
import styled from 'styled-components'
import PlusButton from './PlusButton'
import Title from './Title'
import TextItem from './TextItem'
import Input from './Input'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../modules/mSTP'

class Page extends React.Component {
  componentDidMount(){
    const {pages,title} = this.props
    pages[title].input = null
  }
  render(){
    const ContainingElement = styled.div`
      margin: 10px;
      width: 100%-;
      height: 100%;
      display: block;
      border-radius: 10px;
      padding-bottom: 30px;
      border: 2px solid darkblue;
      background-color: cornflowerblue;
    `
    const {pages,title} = this.props
    return(
      <ContainingElement>
        <Title>{title}</Title>
        <PlusButton pageName={title}/>
        {
          pages[title].items.map(item=>{
            return (
              <React.Fragment key={uuid()}>
                <TextItem content={item}/>
              </React.Fragment>
            )
          })
        }
        {pages[title].input ? <Input pageName={title} /> : null}
      </ContainingElement>
    )
  }
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default connectedComponent
