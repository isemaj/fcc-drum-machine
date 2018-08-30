import { VOLUME_ADJUST } from '../constants/ActionTypes';

const currentState = {
  currentVolume: 1,
};

const volumeReducer = (state = currentState, action) => {
  switch (action.type) {
    case VOLUME_ADJUST:
      return {
      	...state,
      	currentVolume: action.payload,
      };
    default:
      return state;
  }
};

export default volumeReducer;
