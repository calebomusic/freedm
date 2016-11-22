import { UPDATE_COLUMN, RESET_COLUMN } from '../actions/column_actions';
import merge from 'lodash/merge';

const ColumnReducer = (state = 1, action) => {
  switch(action.type){
    case UPDATE_COLUMN:
      return state % 16 + 1;
    case RESET_COLUMN:
      return 1;
    default:
      return state;
  }
};

export default ColumnReducer;
