import { VOLUME_UP, VOLUME_DOWN } from '../constants/ActionTypes';

const currentState = {
  currentVolume: 0,
};

const volumeReducer = (state = currentState, action) => {
  switch (action.type) {
    case VOLUME_UP:
      return {
      	...state,
      	currentVolume: state.currentVolume + action.payload,
      };
    case VOLUME_DOWN:
      return {
        ...state,
        currentVolume: state.currentVolume - action.payload,
      };
    default:
      return state;
  }
};

export default volumeReducer;
