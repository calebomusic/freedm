import { RECEIVE_VISUALIZERS,
         RECEIVE_VISUALIZER,
         REMOVE_VISUALIZER,
         VISUALIZER_ERROR
       } from '../actions/visualizer_actions';
import merge from 'lodash/merge';


const VisualizersReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_VISUALIZERS:
      let newState = {};
      action.visualizers.forEach(visualizer => {
        newState[visualizer.id] = visualizer;
      });
      return newState;
    case RECEIVE_VISUALIZER:
      const newVisualizer = {[action.visualizer.id]: action.visualizer};
      return merge({}, state, newVisualizer);
    case REMOVE_VISUALIZER:
      newState = merge({}, state);
      delete newState[action.visualizer.id];
      return newState;
    case VISUALIZER_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default VisualizersReducer;
