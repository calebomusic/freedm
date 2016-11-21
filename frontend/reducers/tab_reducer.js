import { UPDATE_TAB } from '../actions/tab_actions';
import merge from 'lodash/merge';


const TabReducer = (state = {}, action) => {
  switch(action.type){
    case UPDATE_TAB:
      return action.tab;
    default:
      return state;
  }
};

export default TabReducer;
