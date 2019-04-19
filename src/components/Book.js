import React from 'react'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import Title from './Title'
import BookPageUIButton from './BookPageUIButton'
import BookPage from './BookPage'
import {
  Link,
  Route,
  HashRouter as Router
} from 'react-router-dom'
import uuid from 'uuid'
import '../scss/book.scss'

class Book extends React.Component {
  componentDidMount(){
    const {hidePageUIButtons} = this.props
    hidePageUIButtons()
  }
  componentWillUnmount(){
    const {showPageUIButtons} = this.props
    showPageUIButtons()
  }
  render(){
    const {
      title,
      books,
      pageUIButtonsVisible,
      hidePageUIButtons,
      showPageUIButtons
    } = this.props
    const style = {
      fontSize: '2em'
    }
    console.log(Object.keys(books[title]))
    return(
      <Router>
        <div className="book">
          <Title styleOverride={style}>{title}</Title>
          {
            Object.keys(books[title]).map(page=>(
              <React.Fragment key={uuid()}>
                <Link to={`/${title}/${page}`}>
                  <BookPageUIButton pageName={page}></BookPageUIButton>
                </Link>
              </React.Fragment>
            ))
          }
          {
            Object.keys(books[title]).map(page=>(
              <React.Fragment key={uuid()}>
                <Route path={`/${title}/${page}`}
                       render={ props => <BookPage bookName={title} pageName={page}/> }/>
              </React.Fragment>
            ))
          }
        </div>
      </Router>
    )
  }
}

const connected = connect(mSTP, mDTP)(Book)

export default connected
