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

});

// Todo: handleScrolling
window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

window.addEventListener("scroll", function(e) {
    e.preventDefault();
}, false);
