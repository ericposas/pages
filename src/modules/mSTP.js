import {
  addInput,
  addInput_InBook,
  hideInput_InBook,
  resize,
  addTextItem,
  addTextItem_InBook,
  showAddPageModal,
  hideAddPageModal,
  addPage,
  hidePageUIButtons,
  showPageUIButtons,
  mergePages,
  showCreateBookModal,
  hideCreateBookModal,
  addPageToExistingBook,
  unsetPageAdded,
  deleteTextItem,
  deleteTextItem_inBook,
  deletePage,
  deletePage_inBook
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
    hideInput_InBook(bookName, pageName){ dispatch(hideInput_InBook(bookName, pageName)) },
    addTextItem(pageName,text){ dispatch(addTextItem(pageName,text)) },
    addTextItem_InBook(bookName, pageName, text){ dispatch(addTextItem_InBook(bookName, pageName, text)) },
    showAddPageModal(){ dispatch(showAddPageModal) },
    hideAddPageModal(){ dispatch(hideAddPageModal) },
    addPage(value){ dispatch(addPage(value)) },
    hidePageUIButtons(){ dispatch(hidePageUIButtons) },
    showPageUIButtons(){ dispatch(showPageUIButtons) },
    // beginMerge(){ dispatch(beginMerge) },
    showCreateBookModal(p1, p2){ dispatch(showCreateBookModal(p1, p2)) },
    hideCreateBookModal(){ dispatch(hideCreateBookModal) },
    mergePages(bookName){ dispatch(mergePages(bookName)) },
    addPageToExistingBook(bookName, pageName){ dispatch(addPageToExistingBook(bookName, pageName)) },
    unsetPageAdded(){ dispatch(unsetPageAdded) },
    deleteTextItem(textContent, pageName){ dispatch(deleteTextItem(textContent, pageName)) },
    deleteTextItem_inBook(textContent, bookName, pageName){ dispatch(deleteTextItem_inBook(textContent, bookName, pageName)) },
    deletePage(pageName){ dispatch(deletePage(pageName)) },
    deletePage_inBook(bookName, pageName){ dispatch(deletePage_inBook(bookName, pageName)) }
  }
}
