import { UPDATE_VOLUME } from '../actions/volume_actions';
import merge from 'lodash/merge';


const VolumeReducer = (state = {}, action) => {
  switch(action.type){
    case UPDATE_VOLUME:
      return action.volume;
    default:
      return state;
  }
};

export default VolumeReducer;
