import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import _ from 'lodash'
import '../scss/page-ui.scss'
import {
  mapStateToProps as mSTP,
  mapDispatchToProps as mDTP
} from '../modules/mSTP'
import { connect } from 'react-redux'

const itemSource = {
  isDragging(props, monitor){
  },
  beginDrag(props){
    console.log('drag started!')
    return props
  },
  endDrag(props){
    console.log('drag ended.')
  }
}

const itemDrop = {
  drop(props, monitor){
    const { beginMerge } = props
    if(props.name !== monitor.getItem().name) beginMerge()
  }
}

function sourceCollect(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function targetCollect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class PageUIButton extends React.Component {
  render(){
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      beginMerge,
      src
    } = this.props
    return connectDropTarget(connectDragSource(
      <div className="page-ui-inline">
        <div className="page-ui-wrap">
          <div className="page-ui-inner">
            {this.props.name}
          </div>
        </div>
      </div>
    ))
  }
}

// apparently, the order of the flow matters.
// my props functions would not show up when connect() was called first
export default _.flow(
  DragSource('PAGE_UI', itemSource, sourceCollect),
  DropTarget('PAGE_UI', itemDrop, targetCollect),
  connect(mSTP, mDTP)
)(PageUIButton)
