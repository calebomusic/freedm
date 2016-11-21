export const REQUEST_COLUMNS = "REQUEST_COLUMNS";
export const REQUEST_COLUMN = "REQUEST_COLUMN";
export const RECEIVE_COLUMNS = "RECEIVE_COLUMNS";
export const RECEIVE_COLUMN = "RECEIVE_COLUMN";
export const REMOVE_COLUMN = "REMOVE_COLUMN";
export const CREATE_COLUMN = "CREATE_COLUMN";
export const UPDATE_COLUMN = "UPDATE_COLUMN";
export const DESTROY_COLUMN = "DESTROY_COLUMN";
export const COLUMN_ERROR = "COLUMN_ERROR";

export const requestColumns = () => ({
  type: REQUEST_COLUMNS
});

export const requestColumn = id => ({
  type: REQUEST_COLUMN,
  id
});

export const receiveColumns = columns => ({
  type: RECEIVE_COLUMNS,
  columns
});

export const receiveColumn = column => ({
  type: RECEIVE_COLUMN,
  column
});

export const removeColumn = column => ({
  type: REMOVE_COLUMN,
  column
});

export const createColumn = column => ({
  type: CREATE_COLUMN,
  column
});

export const updateColumn = column => ({
  type: UPDATE_COLUMN,
  column
});

export const destroyColumn = column => ({
  type: DESTROY_COLUMN,
  column
});

export const columnError = error => ({
  type: COLUMN_ERROR,
  error
});
