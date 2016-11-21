import { RECEIVE_COLUMNS,
         RECEIVE_COLUMN,
         REMOVE_COLUMN,
         COLUMN_ERROR
       } from '../actions/column_actions';
import merge from 'lodash/merge';


const ColumnsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_COLUMNS:
      let newState = {};
      action.columns.forEach(column => {
        newState[column.id] = column;
      });
      return newState;
    case RECEIVE_COLUMN:
      const newColumn = {[action.column.id]: action.column};
      return merge({}, state, newColumn);
    case REMOVE_COLUMN:
      newState = merge({}, state);
      delete newState[action.column.id];
      return newState;
    case COLUMN_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default ColumnsReducer;
