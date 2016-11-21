export const ADD_SELECTED_SOUND = "ADD_SELECTED_SOUND";
export const REMOVE_SELECTED_SOUND = "REMOVE_SELECTED_SOUND";
export const CLEAR_SELECTED_SOUNDS = "CLEAR_SELECTED_SOUNDS";

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
