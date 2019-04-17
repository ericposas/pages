import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import _ from 'lodash'
import '../scss/page-ui.scss'

const itemSource = {
  beginDrag(props){
    return {
      
    }
  },
  endDrag(props){
    console.log('drag ended.')
  }
}

const itemDrop = {
  drop(props){
    console.log('dropped!')
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
    const { isDragging, connectDragSource, connectDropTarget, src } = this.props
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

export default _.flow(
  DragSource('PAGE', itemSource, sourceCollect),
  DropTarget('PAGE', itemDrop, targetCollect)
)(PageUIButton)
