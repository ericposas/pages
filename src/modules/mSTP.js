import {
  addInput,
  addInput_InBook,
  resize,
  addTextItem,
  addTextItem_InBook,
  showAddPageModal,
  hideAddPageModal,
  addPage,
  hidePageUIButtons,
  showPageUIButtons,
  beginMerge,
  mergePages,
  showCreateBookModal,
  hideCreateBookModal
} from './Actions'

export const mapStateToProps = (state)=>{
  return{
    ...state
  }
}

export const mapDispatchToProps = (dispatch)=>{
  return {
    resize(){ dispatch(resize()) },
    addInput(pageName){ dispatch(addInput(pageName)) },
    addInput_InBook(bookName, pageName){ dispatch(addInput_InBook(bookName, pageName)) },
    addTextItem(pageName,text){ dispatch(addTextItem(pageName,text)) },
    addTextItem_InBook(bookName, pageName, text){ dispatch(addTextItem_InBook(bookName, pageName, text)) },
    showAddPageModal(){ dispatch(showAddPageModal) },
    hideAddPageModal(){ dispatch(hideAddPageModal) },
    addPage(value){ dispatch(addPage(value)) },
    hidePageUIButtons(){ dispatch(hidePageUIButtons) },
    showPageUIButtons(){ dispatch(showPageUIButtons) },
    beginMerge(){ dispatch(beginMerge) },
    showCreateBookModal(p1, p2){ dispatch(showCreateBookModal(p1, p2)) },
    hideCreateBookModal(){ dispatch(hideCreateBookModal) },
    mergePages(bookName){ dispatch(mergePages(bookName)) }
  }
}
