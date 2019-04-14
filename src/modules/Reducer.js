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
          items: [ 'text item 1', 'link 1', 'http://google.com/' ]
        },
        'Page Two' : {
          items: [ 'some text to save' ]
        }
      }
    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){
    case Types.Test:
      return {
        ...state,
        message: action.message,
        ...state
      }
    case Types.Resize:
      return {
        ...state,
        pageHeight: action.pageHeight,
        ...state
      }
    default:
      return state
  }
}
