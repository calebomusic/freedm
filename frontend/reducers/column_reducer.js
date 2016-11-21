import { UPDATE_COLUMN } from '../actions/column_actions';
import merge from 'lodash/merge';

const ColumnReducer = (state = {}, action) => {
  switch(action.type){
    case UPDATE_COLUMN:
      return action.column;
    default:
      return state;
  }
};

export default ColumnReducer;
