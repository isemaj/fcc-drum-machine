import React from 'react';

import Power from './Power';
import Pad from './Pad';
import Display from './Display';
import Volume from './Volume';

const App = () => (
  <div id='drum-machine'>
    <Power />
    <Pad />
    <Display />
    <Volume />
  </div>
);

export default App;
