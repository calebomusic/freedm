export const REQUEST_TABS = "REQUEST_TABS";
export const REQUEST_TAB = "REQUEST_TAB";
export const RECEIVE_TABS = "RECEIVE_TABS";
export const RECEIVE_TAB = "RECEIVE_TAB";
export const REMOVE_TAB = "REMOVE_TAB";
export const CREATE_TAB = "CREATE_TAB";
export const UPDATE_TAB = "UPDATE_TAB";
export const DESTROY_TAB = "DESTROY_TAB";
export const TAB_ERROR = "TAB_ERROR";

export const requestTabs = () => ({
  type: REQUEST_TABS
});

export const requestTab = id => ({
  type: REQUEST_TAB,
  id
});

export const receiveTabs = tabs => ({
  type: RECEIVE_TABS,
  tabs
});

export const receiveTab = tab => ({
  type: RECEIVE_TAB,
  tab
});

export const removeTab = tab => ({
  type: REMOVE_TAB,
  tab
});

export const createTab = tab => ({
  type: CREATE_TAB,
  tab
});

export const updateTab = tab => ({
  type: UPDATE_TAB,
  tab
});

export const destroyTab = tab => ({
  type: DESTROY_TAB,
  tab
});

export const tabError = error => ({
  type: TAB_ERROR,
  error
});
