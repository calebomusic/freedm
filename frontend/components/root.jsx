import React from 'react';
import { Provider } from 'react-redux';

import App from './app';

const Root = ({store, analyser, canvasCtx}) => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
