import Types from './Types'

// Reducer function with returns Redux state data
export default function Reducer(state, action){
  if(state === undefined){
    // default state
    return {
      appTitle: 'Pages App',
      pageUIButtonsVisible: 1,
      pageHeight: null,
      newPage: null,
      newBook: null,
      bookPageInput: null,
      pagesToBeMerged: null,
      pages: {
        'Page Uno': {
          items: [ 'text item 1', 'link 1', 'http://google.com/' ],
          input: null
        },
        'Page Two': {
          items: [ 'some text to save' ],
          input: null
        }
      },
      books: {
      }
    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){
    case Types.MERGE_PAGES: {
      const _state = Object.assign({}, state)
      const _books = _state.books
      _books[action.bookName] = {}
      _state.pagesToBeMerged.p1.page.inBook = true
      _state.pagesToBeMerged.p2.page.inBook = true
      _books[action.bookName][_state.pagesToBeMerged.p1.name] = _state.pagesToBeMerged.p1.page
      _books[action.bookName][_state.pagesToBeMerged.p2.name] = _state.pagesToBeMerged.p2.page
      delete _state.pages[_state.pagesToBeMerged.p1.name]
      delete _state.pages[_state.pagesToBeMerged.p2.name]
      return {
        ...state,
        newBook: null,
        pagesToBeMerged: null,
        books: _books
      }
    }
    case Types.SHOW_CREATE_BOOK_MODAL: {
      const _state = Object.assign({}, state)
      const _p1 = _state.pages[action.pages.p1]
      const _p2 = _state.pages[action.pages.p2]
      return {
        ...state,
        newBook: 1,
        pagesToBeMerged: { p1: { name:action.pages.p1, page:_p1 }, p2:{ name:action.pages.p2, page:_p2 } }
      }
    }
    case Types.HIDE_CREATE_BOOK_MODAL: {
      return {
        ...state,
        newBook: null,
        pagesToBeMerged: null
      }
    }
    /*case Types.BEGIN_MERGE: {
      console.log('show modal that allows you to name the newly created book')
    }*/
    case Types.SHOW_PAGE_UI_BUTTONS: {
      const _state = Object.assign({}, state)
      _state.pageUIButtonsVisible = action.pageUIVisible
      return _state
    }
    case Types.HIDE_PAGE_UI_BUTTONS: {
      const _state = Object.assign({}, state)
      _state.pageUIButtonsVisible = action.pageUIVisible
      return _state
    }
    case Types.ADD_PAGE: {
      // Here we finally add a new page to the data model and React updates the view
      const pages = Object.assign({}, state.pages)
      pages[action.value] = {
        items: [],
        input: null
      }
      return {
        ...state,
        pages: pages
      }
    }
    case Types.HIDE_PAGE_MODAL: {
      // hide the "Add New Page" modal from view
      const _state = Object.assign({}, state)
      _state.newPage = null
      return _state
    }
    case Types.SHOW_PAGE_MODAL: {
      // open new page input modal/box, where user can input the name of
      //..the new page
      const _state = Object.assign({}, state)
      _state.newPage = 1
      return _state
    }
    case Types.TEXT_ITEM: {
      // logic to add new link/text value to the appropriate pages object
      const _pages = Object.assign({}, state.pages)
      _pages[action.pageName].items.push(action.text)
      _pages[action.pageName].input = null
      return {
        ...state,
        pages: _pages
      }
    }
    case Types.TEXT_ITEM_INBOOK: {
      const _state = Object.assign({}, state)
      _state.books[action.bookName][action.pageName].items.push(action.text)
      _state.bookPageInput = null
      return _state
    }
    case Types.INPUT: {
      // logic to add input value to the pages object
      const _pages = Object.assign({}, state.pages)
      _pages[action.pageName].input = 1
      return {
        ...state,
        pages: _pages
      }
    }
    case Types.INPUT_INBOOK: {
      const _state = Object.assign({}, state)
      _state.bookPageInput = 1
      return _state
    }
    case Types.HIDE_INPUT_INBOOK: {
      const _state = Object.assign({}, state)
      _state.bookPageInput = null
      return _state
    }
    case Types.RESIZE: {
      const _state = Object.assign({}, state)
      _state.pageHeight = action.pageHeight
      return _state
    }
    default: {
      return state
    }
  }
}
