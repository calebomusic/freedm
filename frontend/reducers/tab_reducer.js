import { RECEIVE_TABS,
         RECEIVE_TAB,
         REMOVE_TAB,
         TAB_ERROR
       } from '../actions/tab_actions';
import merge from 'lodash/merge';


const TabsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_TABS:
      let newState = {};
      action.tabs.forEach(tab => {
        newState[tab.id] = tab;
      });
      return newState;
    case RECEIVE_TAB:
      const newTab = {[action.tab.id]: action.tab};
      return merge({}, state, newTab);
    case REMOVE_TAB:
      newState = merge({}, state);
      delete newState[action.tab.id];
      return newState;
    case TAB_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default TabsReducer;
