import React from 'react';

import Power from './Power';
import Pad from './Pad';
import Display from './Display';
import Volume from './Volume';
import KitToggle from './KitToggle';

const App = () => (
  <div id='drum-machine'>
    <Power />
    <Pad />
    <Display />
    <Volume />
    <KitToggle />
  </div>
);

export default App;
