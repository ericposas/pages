import _ from 'lodash'
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
      pageAddedToBook: null,
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
        },
        'Page 3': {
          items: [ 'one item', 'item two' ],
          input: null
        }
      },
      books: {
        'My book': {
          'Pagina': {
            items: [ 'my item', 'mi taco' ],
            input: null
          }
        }
      }
    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){
    case Types.UNSET_PAGE_ADDED: {
      return {
        ...state,
        pageAddedToBook: null
      }
    }
    case Types.ADD_PAGE_TO_EXISTING_BOOK: {
      const _state = Object.assign({}, state)
      if (!_state.books[action.bookName][action.pageName]) _state.books[action.bookName][action.pageName] = _state.pages[action.pageName]
      delete _state.pages[action.pageName]
      return {
        ...state,
        pageAddedToBook: 1,
        pages: _state.pages,
        books: _state.books
      }
    }
    case Types.MERGE_PAGES: {
      const _state = Object.assign({}, state)
      delete _state.pages[_state.pagesToBeMerged.p1.name]
      delete _state.pages[_state.pagesToBeMerged.p2.name]
      return {
        ...state,
        newBook: null,
        pagesToBeMerged: null,
        pages: _state.pages,
        books: {
          ...state.books,
          [action.bookName]: {
            [state.pagesToBeMerged.p1.name]: { ...state.pagesToBeMerged.p1.page },
            [state.pagesToBeMerged.p2.name]: { ...state.pagesToBeMerged.p2.page }
          }
        }
      }
    }
    case Types.SHOW_CREATE_BOOK_MODAL: {
      return {
        ...state,
        newBook: 1,
        pagesToBeMerged: {
          p1: {
            name: action.pages.p1,
            page: { ...state.pages[action.pages.p1] }
          },
          p2: {
            name: action.pages.p2,
            page: { ...state.pages[action.pages.p2] }
          }
        }
      }
    }
    case Types.HIDE_CREATE_BOOK_MODAL: {
      return {
        ...state,
        newBook: null,
        pagesToBeMerged: null
      }
    }
    case Types.SHOW_PAGE_UI_BUTTONS: {
      return {
        ...state,
        pageUIButtonsVisible: action.pageUIVisible
      }
    }
    case Types.HIDE_PAGE_UI_BUTTONS: {
      return {
        ...state,
        pageUIButtonsVisible: action.pageUIVisible
      }
    }
    case Types.ADD_PAGE: {
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.value]: {
            items: [],
            input: null
          }
        }
      }
    }
    case Types.HIDE_PAGE_MODAL: {
      return {
        ...state,
        newPage: null
      }
    }
    case Types.SHOW_PAGE_MODAL: {
      return {
        ...state,
        newPage: 1
      }
    }
    case Types.TEXT_ITEM: {
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.pageName]: {
            items: [...state.pages[action.pageName].items, action.text],
            input: null
          }
        }
      }
    }
    case Types.TEXT_ITEM_INBOOK: {
      return {
        ...state,
        bookPageInput: null,
        books: {
          ...state.books,
          [action.bookName]: {
            ...state.books[action.bookName],
            [action.pageName]: {
              ...state.books[action.bookName][action.pageName],
              items: [...state.books[action.bookName][action.pageName].items, action.text]
            }
          }
        }
      }
    }
    case Types.DELETE_TEXT_ITEM: {
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.pageName]: {
            ...state.pages[action.pageName],
            items: state.pages[action.pageName].items.filter(item=>item !== action.textContent)
          }
        }
      }
    }
    case Types.DELETE_TEXT_ITEM_INBOOK: {
      return {
        ...state,
        books: {
          ...state.books,
          [action.bookName]: {
            ...state.books[action.bookName],
            [action.pageName]: {
              ...state.books[action.bookName][action.pageName],
              items: state.books[action.bookName][action.pageName].items.filter(item=>item !== action.textContent)
            }
          }
        }
      }
    }
    case Types.INPUT: {
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.pageName]: {
            ...state.pages[action.pageName],
            input: 1
          }
        }
      }
    }
    case Types.INPUT_INBOOK: {
      return {
        ...state,
        bookPageInput: 1
      }
    }
    case Types.HIDE_INPUT_INBOOK: {
      return {
        ...state,
        bookPageInput: null
      }
    }
    case Types.RESIZE: {
      return {
        ...state,
        pageHeight: action.pageHeight
      }
    }
    default: {
      return state
    }
  }
}
