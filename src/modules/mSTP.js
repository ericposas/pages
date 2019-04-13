import {test} from './Actions'

export const mapStateToProps = (state)=>{
  return{
    ...state
  }
}

export const mapDispatchToProps = (dispatch)=>{
  return {
    test: ()=>{ dispatch(test) }
  }
}
