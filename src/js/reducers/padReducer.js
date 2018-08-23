import {
  PRESS_Q,
  PRESS_W,
  PRESS_E,
  PRESS_A,
  PRESS_S,
  PRESS_D,
  PRESS_Z,
  PRESS_X,
  PRESS_C,
} from '../constants/ActionTypes';

const currentState = [
  {
    id: 0,
    keyCode: 81,
    drumType: 'drum-q',
    keyLetter: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: 1,
    keyCode: 87,
    drumType: 'drum-w',
    keyLetter: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    id: 2,
    keyCode: 69,
    drumType: 'drum-e',
    keyLetter: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    id: 3,
    keyCode: 65,
    drumType: 'drum-a',
    keyLetter: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    id: 4,
    keyCode: 83,
    drumType: 'drum-s',
    keyLetter: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: 5,
    keyCode: 68,
    drumType: 'drum-d',
    keyLetter: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    id: 6,
    keyCode: 90,
    drumType: 'drum-z',
    keyLetter: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    id: 7,
    keyCode: 88,
    drumType: 'drum-x',
    keyLetter: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    id: 8,
    keyCode: 67,
    drumType: 'drum-c',
    keyLetter: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const padReducer = (state = currentState, action) => {
  switch (action.type) {
    case PRESS_Q:
      // return [...state, state[0]];
      return [...state];
    case PRESS_W:
      // return [...state, state[1]];
      return [...state];
    case PRESS_E:
      // return [...state, state[2]];
      return [...state];
    case PRESS_A:
      // return [...state, state[3]];
      return [...state];
    case PRESS_S:
      // return [...state, state[4]];
      return [...state];
    case PRESS_D:
      // return [...state, state[5]];
      return [...state];
    case PRESS_Z:
      // return [...state, state[6]];
      return [...state];
    case PRESS_X:
      // return [...state, state[7]];
      return [...state];
    case PRESS_C:
      // return [...state, state[8]];
      return [...state];
    default:
      return state;
  }
};

export default padReducer;
