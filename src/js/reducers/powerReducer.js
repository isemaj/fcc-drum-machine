import { TURN_ON, TURN_OFF } from '../constants/ActionTypes';

const currentState = {
  powerStatus: false,
};

const powerReducer = (state = currentState, action) => {
  switch (action.type) {
    case TURN_ON:
      return { ...state, powerStatus: !state.powerStatus };
    case TURN_OFF:
      return { ...state, powerStatus: !state.powerStatus };
    default:
      return state;
  }
};

export default powerReducer;
