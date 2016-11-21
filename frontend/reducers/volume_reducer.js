import { RECEIVE_VOLUMES,
         RECEIVE_VOLUME,
         REMOVE_VOLUME,
         VOLUME_ERROR
       } from '../actions/volume_actions';
import merge from 'lodash/merge';


const VolumesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_VOLUMES:
      let newState = {};
      action.volumes.forEach(volume => {
        newState[volume.id] = volume;
      });
      return newState;
    case RECEIVE_VOLUME:
      const newVolume = {[action.volume.id]: action.volume};
      return merge({}, state, newVolume);
    case REMOVE_VOLUME:
      newState = merge({}, state);
      delete newState[action.volume.id];
      return newState;
    case VOLUME_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default VolumesReducer;
