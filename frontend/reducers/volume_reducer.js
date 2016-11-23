import { UPDATE_VOLUME } from '../actions/volume_actions';
import merge from 'lodash/merge';

const VolumeReducer = (state = 0.7, action) => {
  switch(action.type){
    case UPDATE_VOLUME:
      return action.volume;
    default:
      return state;
  }
};

export default VolumeReducer;
