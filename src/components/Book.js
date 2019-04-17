import React from 'react'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import Title from './Title'
import PageUIButton from './PageUIButton'
import Page from './Page'
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
    return(
      <Router>
        <div className="book">
          <Title styleOverride={style}>{title}</Title>
          {
            books[title].map(item=>(
              <React.Fragment key={uuid()}>
                <Link to={`/${title}/${item.name}`}>
                  <PageUIButton name={item.name}></PageUIButton>
                </Link>
              </React.Fragment>
            ))
          }
          {
            books[title].map(item=>(
              <React.Fragment key={uuid()}>
                <Route path={`/${title}/${item.name}`}
                       render={ props => <Page title={item.name}/> }/>
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
