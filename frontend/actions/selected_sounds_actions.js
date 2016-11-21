export const REQUEST_SELECTED_SOUNDS = "REQUEST_SELECTED_SOUNDS";
export const REQUEST_SELECTED_SOUNDS = "REQUEST_SELECTED_SOUNDS";
export const RECEIVE_SELECTED_SOUNDS = "RECEIVE_SELECTED_SOUNDS";
export const RECEIVE_SELECTED_SOUNDS = "RECEIVE_SELECTED_SOUNDS";
export const REMOVE_SELECTED_SOUNDS = "REMOVE_SELECTED_SOUNDS";
export const CREATE_SELECTED_SOUNDS = "CREATE_SELECTED_SOUNDS";
export const UPDATE_SELECTED_SOUNDS = "UPDATE_SELECTED_SOUNDS";
export const DESTROY_SELECTED_SOUNDS = "DESTROY_SELECTED_SOUNDS";
export const SELECTED_SOUNDS_ERROR = "SELECTED_SOUNDS_ERROR";

export const requestSelectedSounds = () => ({
  type: REQUEST_SELECTED_SOUNDS
});

export const requestSelectedSounds = id => ({
  type: REQUEST_SELECTED_SOUNDS,
  id
});

export const receiveSelectedSounds = selected_sounds => ({
  type: RECEIVE_SELECTED_SOUNDS,
  selected_sounds
});

export const receiveSelectedSounds = selected_sounds => ({
  type: RECEIVE_SELECTED_SOUNDS,
  selected_sounds
});

export const removeSelectedSounds = selected_sounds => ({
  type: REMOVE_SELECTED_SOUNDS,
  selected_sounds
});

export const createSelectedSounds = selected_sounds => ({
  type: CREATE_SELECTED_SOUNDS,
  selected_sounds
});

export const updateSelectedSounds = selected_sounds => ({
  type: UPDATE_SELECTED_SOUNDS,
  selected_sounds
});

export const destroySelectedSounds = selected_sounds => ({
  type: DESTROY_SELECTED_SOUNDS,
  selected_sounds
});

export const selected_soundsError = error => ({
  type: SELECTED_SOUNDS_ERROR,
  error
});
