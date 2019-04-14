import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../modules/mSTP'
import Container from './Container'
import PageUIButton from './PageUIButton'
import AddPageUIPlusButton from './AddPageUIPlusButton'
import AddNewPageModal from './AddNewPageModal'
import Title from './Title'
import Page from './Page'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import uuid from 'uuid'

class App extends React.Component {
  componentDidMount(){
  }
  render(){
    const {message,pages,newPage} = this.props
    return(
      <React.Fragment>
        <HashRouter>
          <Container>
            <AddPageUIPlusButton/>
            { newPage !== null ? <AddNewPageModal/> : null }
            <Title>{this.props.appTitle}</Title>
            {
              Object.keys(pages).map(page=>(
                <React.Fragment key={uuid()}>
                  <Link to={`/${page}`}>
                    <PageUIButton name={page}></PageUIButton>
                  </Link>
                </React.Fragment>
              ))
            }
            {
              Object.keys(pages).map(page=>(
                <React.Fragment key={uuid()}>
                  <Route
                    path={`/${page}`}
                    render={ props => <Page title={page} /> }
                  />
                </React.Fragment>)
              )
            }
          </Container>
        </HashRouter>
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
