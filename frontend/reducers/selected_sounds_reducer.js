import { RECEIVE_SELECTED_SOUNDS,
         RECEIVE_SELECTED_SOUNDS,
         REMOVE_SELECTED_SOUNDS,
         SELECTED_SOUNDS_ERROR
       } from '../actions/selected_sounds_actions';
import merge from 'lodash/merge';


const SelectedSoundsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_SELECTED_SOUNDS:
      let newState = {};
      action.selected_sounds.forEach(selected_sounds => {
        newState[selected_sounds.id] = selected_sounds;
      });
      return newState;
    case RECEIVE_SELECTED_SOUNDS:
      const newSelectedSounds = {[action.selected_sounds.id]: action.selected_sounds};
      return merge({}, state, newSelectedSounds);
    case REMOVE_SELECTED_SOUNDS:
      newState = merge({}, state);
      delete newState[action.selected_sounds.id];
      return newState;
    case SELECTED_SOUNDS_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default SelectedSoundsReducer;
