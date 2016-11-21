export const ADD_SELECTED_SOUND = "ADD_SELECTED_SOUND";
export const REMOVE_SELECTED_SOUND = "REMOVE_SELECTED_SOUND";
export const REMOVE_SELECTED_SOUNDS = "REMOVE_SELECTED_SOUNDS";

export const addSelectedSound = selectedSound => ({
  type: ADD_SELECTED_SOUND,
  selectedSound
});

export const removeSelectedSound = selectedSound => ({
  type: REMOVE_SELECTED_SOUND,
  selectedSound
});

export const removeSelectedSounds = selectedSounds => ({
  type: REMOVE_SELECTED_SOUNDS,
  selectedSounds
});
