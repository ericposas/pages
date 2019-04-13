import React from 'react'
import styled from 'styled-components'
import PlusButton from './PlusButton'

class Page extends React.Component {
  render(){
    const ContainingElement = styled.div`
      margin: 10px;
      width: 100%-;
      height: 100%;
      display: block;
      border-radius: 10px;
      border: 2px solid darkblue;
      background-color: cornflowerblue;
    `
    return(
      <ContainingElement>
        <PlusButton/>
      </ContainingElement>
    )
  }
}

export default Page
