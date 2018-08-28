import { KIT_SELECT } from '../constants/ActionTypes';

const currentState = {
  kitStatus: false,
};

const kitReducer = (state = currentState, action) => {
  switch (action.type) {
    case KIT_SELECT:
      return { ...state, kitStatus: !state.kitStatus };
    default:
      return state;
  }
};

export default kitReducer;
