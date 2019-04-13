import React from 'react'
import styled from 'styled-components'

class Page extends React.Component {
  render(){
    const Outer = styled.div`
      margin: 10px;
      width: 100%-;
      height: 100%;
      display: block;
      border-radius: 10px;
      border: 2px solid #0000FF;
      background-color: cornflowerblue;
    `
    return(
      <Outer></Outer>
    )
  }
}

export default Page
