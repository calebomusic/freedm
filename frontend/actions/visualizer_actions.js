export const REQUEST_VISUALIZERS = "REQUEST_VISUALIZERS";
export const REQUEST_VISUALIZER = "REQUEST_VISUALIZER";
export const RECEIVE_VISUALIZERS = "RECEIVE_VISUALIZERS";
export const RECEIVE_VISUALIZER = "RECEIVE_VISUALIZER";
export const REMOVE_VISUALIZER = "REMOVE_VISUALIZER";
export const CREATE_VISUALIZER = "CREATE_VISUALIZER";
export const UPDATE_VISUALIZER = "UPDATE_VISUALIZER";
export const DESTROY_VISUALIZER = "DESTROY_VISUALIZER";
export const VISUALIZER_ERROR = "VISUALIZER_ERROR";

export const requestVisualizers = () => ({
  type: REQUEST_VISUALIZERS
});

export const requestVisualizer = id => ({
  type: REQUEST_VISUALIZER,
  id
});

export const receiveVisualizers = visualizers => ({
  type: RECEIVE_VISUALIZERS,
  visualizers
});

export const receiveVisualizer = visualizer => ({
  type: RECEIVE_VISUALIZER,
  visualizer
});

export const removeVisualizer = visualizer => ({
  type: REMOVE_VISUALIZER,
  visualizer
});

export const createVisualizer = visualizer => ({
  type: CREATE_VISUALIZER,
  visualizer
});

export const updateVisualizer = visualizer => ({
  type: UPDATE_VISUALIZER,
  visualizer
});

export const destroyVisualizer = visualizer => ({
  type: DESTROY_VISUALIZER,
  visualizer
});

export const visualizerError = error => ({
  type: VISUALIZER_ERROR,
  error
});
