import { DISPLAY } from '../constants/ActionTypes';

const currentState = {
  displayKey: '',
};

const displayReducer = (state = currentState, action) => {
  switch (action.type) {
    case DISPLAY:
      return {
      	...state,
      	displayKey: action.payload,
      };
    default:
      return state;
  }
};

export default displayReducer;
