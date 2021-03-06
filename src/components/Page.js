import uuid from 'uuid'
import React from 'react'
import PlusButton from './PlusButton'
import Title from './Title'
import TextItem from './TextItem'
import Input from './Input'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../modules/mSTP'
import '../scss/page.scss'

class Page extends React.Component {
  componentDidMount(){
    const {pages, title, hidePageUIButtons} = this.props
    pages[title].input = null
    hidePageUIButtons()
  }
  componentWillUnmount(){
    const {showPageUIButtons} = this.props
    showPageUIButtons()
  }
  render(){
    const {pages, title, pageHeight, pageUIButtonsVisible} = this.props
    const style = {
      fontSize: '2em',
      color: 'cornflowerblue'
    }
    return(
      <div className="page">
        <Title styleOverride={style}>{title}</Title>
        <PlusButton pageName={title}/>
        {
          pages[title].items.map(item=>{
            return (
              <React.Fragment key={uuid()}>
                <TextItem content={item}/>
              </React.Fragment>
            )
          })
        }
        {pages[title].input ? <Input pageName={title} /> : null}
      </div>
    )
  }
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

export default connectedComponent
