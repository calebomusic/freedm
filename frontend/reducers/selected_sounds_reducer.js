import { ADD_SELECTED_SOUND,
         REMOVE_SELECTED_SOUND,
         CLEAR_SELECTED_SOUNDS
       } from '../actions/selected_sounds_actions';
import merge from 'lodash/merge';

const nullState = {};

for (let i = 1; i < 17; i++) {
  let cells = {};
  for (let j = 1; j < 17; j++) {
    cells[j] = false;
  }
  nullState[i] = cells;
}

// const demoState = {};

const SelectedSoundsReducer = (state = nullState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case ADD_SELECTED_SOUND:
      newState[action.col][action.track] = true;
      return newState;
    case REMOVE_SELECTED_SOUND:
      newState[action.col][action.track] = false;
      return newState;
    case CLEAR_SELECTED_SOUNDS:
      return nullState;
    default:
      return state;
  }
};

export default SelectedSoundsReducer;
