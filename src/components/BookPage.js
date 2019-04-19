import uuid from 'uuid'
import React from 'react'
import AddLinkTextButton_InBook from './AddLinkTextButton_InBook'
import Title from './Title'
import TextItem from './TextItem'
import Input_InBook from './Input_InBook'
import {connect} from 'react-redux'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import '../scss/page.scss'

class BookPage extends React.Component {
  componentDidMount(){
  }
  componentWillUnmount(){
  }
  render(){
    const { books, bookName, pageName, pageHeight } = this.props
    const style = {
      fontSize: '2em',
      color: 'cornflowerblue'
    }
    console.log(
      books[bookName][pageName]
    )
    return(
      <div className="page">
        <Title styleOverride={style}>{pageName}</Title>
        <AddLinkTextButton_InBook bookName={bookName} pageName={pageName}/>
        {
          books[bookName][pageName].items.map(item=>{
            return (
              <React.Fragment key={uuid()}>
                <TextItem content={item}/>
              </React.Fragment>
            )
          })
        }
        {
          books[bookName][pageName].input === 1 ? <Input_InBook bookName={bookName} pageName={pageName} /> : null
        }
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(BookPage)
