import React from 'react'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import Container from './Container'
import PageUIButton from './PageUIButton'
import AddPageUIPlusButton from './AddPageUIPlusButton'
import AddNewPageModal from './AddNewPageModal'
import BackToMainButton from './BackToMainButton'
import Title from './Title'
import Page from './Page'
import {
  Route,
  Link,
  withRouter,
  BrowserRouter as Router
} from 'react-router-dom'
import uuid from 'uuid'

class App extends React.Component {
  componentDidMount(){
  }
  render(){
    const {message, pages, newPage, pageUIButtonsVisible} = this.props
    return(
      <React.Fragment>
        <Router>
          <Container>
            { pageUIButtonsVisible !== 1 ? <BackToMainButton/> : null }
            <AddPageUIPlusButton/>
            { newPage !== null ? <AddNewPageModal/> : null }
            <Title>{this.props.appTitle}</Title>
            {
              pageUIButtonsVisible === 1
              ? Object.keys(pages).map(page=>(
                <React.Fragment key={uuid()}>
                  <Link to={`/${page}`}>
                    <PageUIButton name={page}></PageUIButton>
                  </Link>
                </React.Fragment>
              ))
              : null
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
        </Router>
      </React.Fragment>
    )
  }
}

// connect our React component and export the connected component for use
const connectedComponent = connect(mSTP, mDTP)(App)

export default connectedComponent
