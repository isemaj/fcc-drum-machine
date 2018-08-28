import { combineReducers } from 'redux';

import padReducer from './padReducer';
import powerReducer from './powerReducer';
import volumeReducer from './volumeReducer';
import kitReducer from './kitReducer';

const rootReducer = combineReducers({
  pad: padReducer,
  power: powerReducer,
  volume: volumeReducer,
  kit: kitReducer,
});

export default rootReducer;
