import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../modules/mSTP'
import Container from './Container'
import Page from './Page'

class App extends React.Component {
  componentDidMount(){
    const {test} = this.props
    setTimeout(test, 2000)
  }
  render(){
    const {message} = this.props
    return(
      <React.Fragment>
        <Container>
          <Page></Page>
        </Container>
      </React.Fragment>
    )
  }
}

// connect our React component and export the connected component for use
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default connectedComponent
