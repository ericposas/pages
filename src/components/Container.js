import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../modules/mSTP'

// Container class is the top-level on the Profile page that will hold all
// ..Pages and Book types

class Container extends React.Component {
  componentDidMount(){
    const {resize,test} = this.props
    resize()
    window.addEventListener('resize', resize)
  }
  componentWillUnmount(){
    const {resize} = this.props
    window.removeEventListener('resize', resize)
  }
  render(){
    const {children,pageHeight} = this.props
    const style = {}
    return(
      <div style={style}>
        {children}
      </div>
    )
  }
}

// connect our React component and export the connected component for use
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default connectedComponent
