import { ADD_SELECTED_SOUND,
         REMOVE_SELECTED_SOUND,
         CLEAR_SELECTED_SOUNDS,
         EXTEND_ON_NEW_INSTRUMENT,
         SHRINK_ON_NEW_INSTRUMENT
       } from '../actions/selected_sounds_actions';
import { nullState, demoState } from '../util/selected_sounds_states';
import merge from 'lodash/merge';

const SelectedSoundsReducer = (state = demoState, action) => {
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
    case EXTEND_ON_NEW_INSTRUMENT:
      for (var i = action.startRow; i < (action.startRow + 8); i++) {
        let cells = {};
        for (let j = 1; j < 17; j++) {
          cells[j] = false;
        }
        newState[i] = cells;
      }

      return newState;
    case SHRINK_ON_NEW_INSTRUMENT:
      for (var i = action.startPos; i < (action.startPos + 8); i++) {
        delete newState[i];
      }

      return newState;
    default:
      return state;
  }
};

export default SelectedSoundsReducer;
