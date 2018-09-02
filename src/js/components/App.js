import React from 'react';

import Power from './Power';
import Pad from './Pad';
import Display from './Display';
import Volume from './Volume';
import KitToggle from './KitToggle';
import '../../css/App.scss';

const App = () => (
  <div id="drum-machine">
    <div id="pad-pane">
      <Pad />
    </div>
    <div id="volume-pane">
      <Volume />
    </div>
    <div id="controls-pane">
      <KitToggle />
      <Display />
      <Power />
    </div>
  </div>
);

export default App;
