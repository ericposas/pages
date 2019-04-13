import Types from './Types'

// Reducer function with returns Redux state data
export default function Reducer(state, action){
  if(state === undefined){
    // default state
    return {
      message: 'React',
      pageHeight: ''
    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){
    case Types.Test:
      return {
        message: action.message
      }
    case Types.Resize:
      return {
        pageHeight: action.pageHeight
      }
    default:
      return state
  }
}
