import React from 'react'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import Container from './Container'
import PageUIButton from './PageUIButton'
import BookUIButton from './BookUIButton'
import AddPageUIPlusButton from './AddPageUIPlusButton'
import AddNewPageModal from './AddNewPageModal'
import BackToMainButton from './BackToMainButton'
import Title from './Title'
import Page from './Page'
import Book from './Book'
import {
  Route,
  Link,
  withRouter,
  HashRouter as Router
} from 'react-router-dom'
import uuid from 'uuid'

class App extends React.Component {
  componentDidMount(){
  }
  render(){
    const {message, pages, books, newPage, pageUIButtonsVisible} = this.props
    return(
      <React.Fragment>
        <Router>
          <Container>
            { pageUIButtonsVisible !== 1 ? <BackToMainButton/> : null }
            <AddPageUIPlusButton/>
            { newPage !== null ? <AddNewPageModal/> : null }
            <Title>{this.props.appTitle}</Title>
            {/*render Page selection buttons that link to Page routes*/}
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
            {/*routes to Pages*/}
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
            {/*render Book selection buttons that link to Book view routes*/}
            {
              pageUIButtonsVisible === 1
              ? Object.keys(books).map(book=>(
                <React.Fragment key={uuid()}>
                  <Link to={`/${book}`}>
                    <BookUIButton name={book}></BookUIButton>
                  </Link>
                </React.Fragment>
              ))
              : null
            }
            {/*render Book view routes*/}
            {
              Object.keys(books).map(book=>(
                <React.Fragment key={uuid()}>
                  <Route
                    path={`/${book}`}
                    render={ props => <Book title={book} /> }
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
