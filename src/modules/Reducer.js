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
        'Book One': [
          {
            name: 'Page Uno'
          }
        ]
      }
    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){
    case Types.MERGE_PAGES: {

    }
    case Types.BEGIN_MERGE: {
      console.log('show modal that allows you to name the newly created book')
    }
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
      const pages = Object.assign({}, state.pages)
      pages[action.pageName].items.push(action.text)
      pages[action.pageName].input = null
      return {
        ...state,
        pages: pages
      }
    }
    case Types.INPUT: {
      // logic to add input value to the pages object
      const pages = Object.assign({}, state.pages)
      pages[action.pageName].input = 1
      return {
        ...state,
        pages: pages
      }
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
