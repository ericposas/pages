import Types from './Types'

export const test = { type: Types.TEST, message: 'React is NOW running' }

export const resize = ()=>{
  const height = window.innerHeight
  return { type: Types.RESIZE, pageHeight: height - 300 }
}

export const addInput = pageName=>{
  return {
    type: Types.INPUT,
    pageName: pageName
  }
}

export const addInput_InBook = (bookName, pageName)=>{
  return {
    type: Types.INPUT_INBOOK,
    bookName: bookName,
    pageName: pageName
  }
}

export const hideInput_InBook = (bookName, pageName)=>{
  return {
    type: Types.HIDE_INPUT_INBOOK,
    bookName: bookName,
    pageName: pageName
  }
}

export const addTextItem = (pageName,text)=>{
  return {
    type: Types.TEXT_ITEM,
    pageName: pageName,
    text: text
  }
}

export const addTextItem_InBook = (bookName, pageName, text)=>{
  return {
    type: Types.TEXT_ITEM_INBOOK,
    bookName: bookName,
    pageName: pageName,
    text: text
  }
}

export const showAddPageModal = { type: Types.SHOW_PAGE_MODAL }

export const hideAddPageModal = { type: Types.HIDE_PAGE_MODAL }

export const addPage = value=>{
  return { type: Types.ADD_PAGE, value: value }
}

export const hidePageUIButtons = { type: Types.HIDE_PAGE_UI_BUTTONS, pageUIVisible: null }

export const showPageUIButtons = { type: Types.SHOW_PAGE_UI_BUTTONS, pageUIVisible: 1 }

export const beginMerge = { type: Types.BEGIN_MERGE }

export const showCreateBookModal = (page1, page2)=>{
  return { type: Types.SHOW_CREATE_BOOK_MODAL, pages: { p1: page1, p2: page2 } }
}

export const hideCreateBookModal = { type: Types.HIDE_CREATE_BOOK_MODAL }

export const mergePages = bookName=>{
  return { type: Types.MERGE_PAGES, bookName: bookName }
}

export const addPageToExistingBook = (bookName, pageName)=>{
  return { type: Types.ADD_PAGE_TO_EXISTING_BOOK, bookName: bookName, pageName: pageName }
}

export const unsetPageAdded = { type: Types.UNSET_PAGE_ADDED }

export const deleteTextItem = (textContent, pageName)=>{
  return {
    type: Types.DELETE_TEXT_ITEM, textContent: textContent, pageName: pageName
  }
}

export const deleteTextItem_inBook = (textContent, bookName, pageName)=>{
  return {
    type: Types.DELETE_TEXT_ITEM_INBOOK, textContent: textContent, bookName: bookName, pageName: pageName
  }
}

export const deletePage = pageName=>{
  return { type: Types.DELETE_PAGE, pageName: pageName }
}

export const deletePage_inBook = (bookName, pageName)=>{
  return { type: Types.DELETE_PAGE_INBOOK, bookName: bookName, pageName: pageName }
}
