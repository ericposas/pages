import Types from './Types'

// Reducer function with returns Redux state data
export default function Reducer(state, action){
  if(state === undefined){
    // default state
    return {
      appTitle: 'Pages',
      pageHeight: null,
      newPage: null,
      pages: {
        'Page Uno' : {
          items: [ 'text item 1', 'link 1', 'http://google.com/' ],
          input: null
        },
        'Page Two' : {
          items: [ 'some text to save' ],
          input: null
        }
      }
    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){
    case Types.AddPage: {
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
    case Types.HidePageModal: {
      // hide the "Add New Page" modal from view
      const _state = Object.assign({}, state)
      _state.newPage = null
      return _state
    }
    case Types.ShowPageModal: {
      // open new page input modal/box, where user can input the name of
      //..the new page
      const _state = Object.assign({}, state)
      _state.newPage = 1
      return _state
    }
    case Types.TextItem: {
      // logic to add new link/text value to the appropriate pages object
      const pages = Object.assign({}, state.pages)
      pages[action.pageName].items.push(action.text)
      pages[action.pageName].input = null
      return {
        ...state,
        pages: pages
      }
    }
    case Types.Input: {
      // logic to add input value to the pages object
      const pages = Object.assign({}, state.pages)
      pages[action.pageName].input = 1
      return {
        ...state,
        pages: pages
      }
    }
    case Types.Resize: {
      const _state = Object.assign({}, state)
      _state.pageHeight = action.pageHeight
      return _state
    }
    default: {
      return state
    }
  }
}
