import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import Power from './Power';
import Pad from './Pad';
import Display from './Display';
import Volume from './Volume';
import KitToggle from './KitToggle';
import '../../css/App.scss';

library.add(faPowerOff);

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
