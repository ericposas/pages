import uuid from 'uuid'
import React from 'react'
import styled from 'styled-components'
import PlusButton from './PlusButton'
import Title from './Title'
import TextItem from './TextItem'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../modules/mSTP'

class Page extends React.Component {
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
        <PlusButton/>
        {
          pages[this.props.title].items.map(item=>{
            return (
              <React.Fragment key={uuid()}>
                <TextItem content={item}/>
              </React.Fragment>
            )
          })
        }
      </ContainingElement>
    )
  }
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default connectedComponent
