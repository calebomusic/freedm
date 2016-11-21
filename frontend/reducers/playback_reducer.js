import { START, STOP } from '../actions/playback_actions';
import merge from 'lodash/merge';


const PlaybackReducer = (state = false, action) => {
  switch(action.type){
    case START:
      return true;
    case END:
      return false;
    default:
      return state;
  }
};

export default PlaybackReducer;
