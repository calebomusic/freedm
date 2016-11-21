import { RECEIVE_PLAYBACKS,
         RECEIVE_PLAYBACK,
         REMOVE_PLAYBACK,
         PLAYBACK_ERROR
       } from '../actions/playback_actions';
import merge from 'lodash/merge';


const PlaybacksReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_PLAYBACKS:
      let newState = {};
      action.playbacks.forEach(playback => {
        newState[playback.id] = playback;
      });
      return newState;
    case RECEIVE_PLAYBACK:
      const newPlayback = {[action.playback.id]: action.playback};
      return merge({}, state, newPlayback);
    case REMOVE_PLAYBACK:
      newState = merge({}, state);
      delete newState[action.playback.id];
      return newState;
    case PLAYBACK_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default PlaybacksReducer;
