import Types from './Types'

// Reducer function with returns Redux state data
export default function Reducer(state, action){
  if(state === undefined){
    // default state
    return {
      appTitle: 'Pages',
      message: 'React',
      pageHeight: '',
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
    case Types.Test: {
      return {
        ...state,
        message: action.message,
        ...state
      }
    }
    case Types.Resize: {
      return {
        ...state,
        pageHeight: action.pageHeight,
        ...state
      }
    }
    default: {
      return state
    }
  }
}
