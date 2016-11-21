export const REQUEST_BPMS = "REQUEST_BPMS";
export const REQUEST_BPM = "REQUEST_BPM";
export const RECEIVE_BPMS = "RECEIVE_BPMS";
export const RECEIVE_BPM = "RECEIVE_BPM";
export const REMOVE_BPM = "REMOVE_BPM";
export const CREATE_BPM = "CREATE_BPM";
export const UPDATE_BPM = "UPDATE_BPM";
export const DESTROY_BPM = "DESTROY_BPM";
export const BPM_ERROR = "BPM_ERROR";

export const requestBpms = () => ({
  type: REQUEST_BPMS
});

export const requestBpm = id => ({
  type: REQUEST_BPM,
  id
});

export const receiveBpms = bpms => ({
  type: RECEIVE_BPMS,
  bpms
});

export const receiveBpm = bpm => ({
  type: RECEIVE_BPM,
  bpm
});

export const removeBpm = bpm => ({
  type: REMOVE_BPM,
  bpm
});

export const createBpm = bpm => ({
  type: CREATE_BPM,
  bpm
});

export const updateBpm = bpm => ({
  type: UPDATE_BPM,
  bpm
});

export const destroyBpm = bpm => ({
  type: DESTROY_BPM,
  bpm
});

export const bpmError = error => ({
  type: BPM_ERROR,
  error
});
