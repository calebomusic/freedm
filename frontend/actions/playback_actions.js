export const REQUEST_PLAYBACKS = "REQUEST_PLAYBACKS";
export const REQUEST_PLAYBACK = "REQUEST_PLAYBACK";
export const RECEIVE_PLAYBACKS = "RECEIVE_PLAYBACKS";
export const RECEIVE_PLAYBACK = "RECEIVE_PLAYBACK";
export const REMOVE_PLAYBACK = "REMOVE_PLAYBACK";
export const CREATE_PLAYBACK = "CREATE_PLAYBACK";
export const UPDATE_PLAYBACK = "UPDATE_PLAYBACK";
export const DESTROY_PLAYBACK = "DESTROY_PLAYBACK";
export const PLAYBACK_ERROR = "PLAYBACK_ERROR";

export const requestPlaybacks = () => ({
  type: REQUEST_PLAYBACKS
});

export const requestPlayback = id => ({
  type: REQUEST_PLAYBACK,
  id
});

export const receivePlaybacks = playbacks => ({
  type: RECEIVE_PLAYBACKS,
  playbacks
});

export const receivePlayback = playback => ({
  type: RECEIVE_PLAYBACK,
  playback
});

export const removePlayback = playback => ({
  type: REMOVE_PLAYBACK,
  playback
});

export const createPlayback = playback => ({
  type: CREATE_PLAYBACK,
  playback
});

export const updatePlayback = playback => ({
  type: UPDATE_PLAYBACK,
  playback
});

export const destroyPlayback = playback => ({
  type: DESTROY_PLAYBACK,
  playback
});

export const playbackError = error => ({
  type: PLAYBACK_ERROR,
  error
});
