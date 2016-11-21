export const START = "START";
export const STOP = "STOP";

export const startPlayback = () => ({
  type: START
});

export const stopPlayback = () => ({
  type: STOP
});
