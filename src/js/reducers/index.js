import { combineReducers } from 'redux';

import powerReducer from './powerReducer';
import volumeReducer from './volumeReducer';
import kitReducer from './kitReducer';
import displayReducer from './displayReducer';

const rootReducer = combineReducers({
  power: powerReducer,
  volume: volumeReducer,
  kit: kitReducer,
  display: displayReducer,
});

export default rootReducer;
