import { UPDATE_BPM } from '../actions/bpm_actions';
import merge from 'lodash/merge';

const BpmReducer = (state = 1000, action) => {
  switch(action.type){
    case UPDATE_BPM:
      return action.bpm
    default:
      return state;
  }
};

export default BpmReducer;
