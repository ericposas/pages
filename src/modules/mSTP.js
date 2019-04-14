import {
  test,
  addInput,
  resize,
  addTextItem
} from './Actions'

export const mapStateToProps = (state)=>{
  return{
    ...state
  }
}

export const mapDispatchToProps = (dispatch)=>{
  return {
    test(){ dispatch(test) },
    resize(){ dispatch(resize()) },
    addInput(pageName){ dispatch(addInput(pageName)) },
    addTextItem(pageName,text){ dispatch(addTextItem(pageName,text)) }
  }
}
