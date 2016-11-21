import { RECEIVE_BPMS,
         RECEIVE_BPM,
         REMOVE_BPM,
         BPM_ERROR
       } from '../actions/bpm_actions';
import merge from 'lodash/merge';


const BpmsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_BPMS:
      let newState = {};
      action.bpms.forEach(bpm => {
        newState[bpm.id] = bpm;
      });
      return newState;
    case RECEIVE_BPM:
      const newBpm = {[action.bpm.id]: action.bpm};
      return merge({}, state, newBpm);
    case REMOVE_BPM:
      newState = merge({}, state);
      delete newState[action.bpm.id];
      return newState;
    case BPM_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default BpmsReducer;
