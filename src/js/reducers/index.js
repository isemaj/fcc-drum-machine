import { combineReducers } from 'redux';

import padReducer from './padReducer';
import powerReducer from './powerReducer';
import volumeReducer from './volumeReducer';

const rootReducer = combineReducers({
  pad: padReducer,
  power: powerReducer,
  volume: volumeReducer,
});

export default rootReducer;
