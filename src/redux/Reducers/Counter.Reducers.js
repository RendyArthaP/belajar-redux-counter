import { INCEREMENT, DECREMENT } from '../Actions/Counter.Actions';

const initialState = {
  counter: 0
}

const counter = (state = initialState, action) => {
  switch(action.type) {
    case INCEREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      if(state.counter > 0) {
        return {
          ...state,
          counter: state.counter - 1
        }
      } else {
        return state
      }
      
    default:
      return state
  }
}

export default counter