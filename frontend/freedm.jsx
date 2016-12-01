import React from 'react';
import ReactDOM from 'react-dom';
//
import Root from './components/root';
import configureStore from './store/store';
import Visualizer from './components/visualizer/visualizer';

import { addInstrument, removeInstrument  } from './actions/instruments_actions'
import { extendOnNewInstrument, shrinkOnNewInstrument } from './actions/selected_sounds_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={store}/>, root);

  // Todo: testing
  window.store = store;
  window.addInstrument = (name) => store.dispatch(addInstrument(name));
  window.removeInstrument = (name) => store.dispatch(removeInstrument(name));
  window.extendOnNewInstrument = () => store.dispatch(extendOnNewInstrument());
  window.extendOnNewInstrument = () => store.dispatch(extendOnNewInstrument());
});
