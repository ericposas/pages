import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../modules/mSTP'

class App extends React.Component {
  componentDidMount(){
    const {test} = this.props
    setTimeout(test, 2000)
  }
  render(){
    const {message} = this.props
    return(
      <React.Fragment>
        <div>{message}</div>
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
