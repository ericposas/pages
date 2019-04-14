import {
  test,
  addInput,
  resize,
  addTextItem,
  showAddPageModal,
  hideAddPageModal,
  addPage,
  hidePageUIButtons,
  showPageUIButtons
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
    addTextItem(pageName,text){ dispatch(addTextItem(pageName,text)) },
    showAddPageModal(){ dispatch(showAddPageModal) },
    hideAddPageModal(){ dispatch(hideAddPageModal) },
    addPage(value){ dispatch(addPage(value)) },
    hidePageUIButtons(){ dispatch(hidePageUIButtons) },
    showPageUIButtons(){ dispatch(showPageUIButtons) }
  }
}
