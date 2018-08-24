import * as types from '../constants/ActionTypes';

export const turnOn = () => ({
  type: types.TURN_ON,
});

export const turnOff = () => ({
  type: types.TURN_OFF,
});

export const volumeUp = volume => ({
  type: types.VOLUME_UP,
  payload: volume,
});

export const volumeDown = volume => ({
  type: types.VOLUME_DOWN,
  payload: volume,
});

export const pressQ = () => ({
  type: types.PRESS_Q,
  payload: {
    id: 0,
    keyCode: 81,
    drumType: 'drum-q',
    keyLetter: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  }
});

export const pressW = () => ({
  type: types.PRESS_W,
});

export const pressE = () => ({
  type: types.PRESS_E,
});
export const pressA = () => ({
  type: types.PRESS_A,
});
export const pressS = () => ({
  type: types.PRESS_S,
});
export const pressD = () => ({
  type: types.PRESS_D,
});
export const pressZ = () => ({
  type: types.PRESS_Z,
});
export const pressX = () => ({
  type: types.PRESS_X,
});
export const pressC = () => ({
  type: types.PRESS_C,
});

// export const pressQ = key => {
//   console.log('You press ' + key);
//   return {
//     type: types.PRESS_Q,
//     payload: key
//   }
// }
