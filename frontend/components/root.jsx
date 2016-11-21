import React from 'react';
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root;
