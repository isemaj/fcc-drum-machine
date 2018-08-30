import * as types from '../constants/ActionTypes';

export const turnOn = () => ({
  type: types.TURN_ON,
});

export const turnOff = () => ({
  type: types.TURN_OFF,
});

export const adjustVolume = volume => ({
  type: types.VOLUME_ADJUST,
  payload: volume,
});

export const selectKit = () => ({
  type: types.KIT_SELECT,
});

export const displayNow = selectedKey => ({
  type: types.DISPLAY,
  payload: selectedKey,
});
