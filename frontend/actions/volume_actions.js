export const REQUEST_VOLUMES = "REQUEST_VOLUMES";
export const REQUEST_VOLUME = "REQUEST_VOLUME";
export const RECEIVE_VOLUMES = "RECEIVE_VOLUMES";
export const RECEIVE_VOLUME = "RECEIVE_VOLUME";
export const REMOVE_VOLUME = "REMOVE_VOLUME";
export const CREATE_VOLUME = "CREATE_VOLUME";
export const UPDATE_VOLUME = "UPDATE_VOLUME";
export const DESTROY_VOLUME = "DESTROY_VOLUME";
export const VOLUME_ERROR = "VOLUME_ERROR";

export const requestVolumes = () => ({
  type: REQUEST_VOLUMES
});

export const requestVolume = id => ({
  type: REQUEST_VOLUME,
  id
});

export const receiveVolumes = volumes => ({
  type: RECEIVE_VOLUMES,
  volumes
});

export const receiveVolume = volume => ({
  type: RECEIVE_VOLUME,
  volume
});

export const removeVolume = volume => ({
  type: REMOVE_VOLUME,
  volume
});

export const createVolume = volume => ({
  type: CREATE_VOLUME,
  volume
});

export const updateVolume = volume => ({
  type: UPDATE_VOLUME,
  volume
});

export const destroyVolume = volume => ({
  type: DESTROY_VOLUME,
  volume
});

export const volumeError = error => ({
  type: VOLUME_ERROR,
  error
});
