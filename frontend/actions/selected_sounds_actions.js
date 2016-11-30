export const ADD_SELECTED_SOUND = "ADD_SELECTED_SOUND";
export const REMOVE_SELECTED_SOUND = "REMOVE_SELECTED_SOUND";
export const CLEAR_SELECTED_SOUNDS = "CLEAR_SELECTED_SOUNDS";
export const EXTEND_ON_NEW_INSTRUMENT = 'EXTEND_ON_NEW_INSTRUMENT';
export const SHRINK_ON_NEW_INSTRUMENT = 'SHRINK_ON_NEW_INSTRUMENT';

export const addSelectedSound = (col, track) => ({
  type: ADD_SELECTED_SOUND,
  col,
  track
});

export const removeSelectedSound = (col, track) => ({
  type: REMOVE_SELECTED_SOUND,
  col,
  track
});

export const clearSelectedSounds = () => ({
  type: CLEAR_SELECTED_SOUNDS
});

export const extendOnNewInstrument = (startPos) => ({
  type: EXTEND_ON_NEW_INSTRUMENT,
  startPos
});

export const shrinkOnNewInstrument = (startPos) => ({
  type: SHRINK_ON_NEW_INSTRUMENT,
  startPos
});
