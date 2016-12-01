import { ADD_INSTRUMENT,
         REMOVE_INSTRUMENT } from '../actions/instruments_actions';

import merge from 'lodash/merge';

const defaultInstruments = [
  {
    name: 'DrumKit1',
    startRow: 1
  },
  {
    name: 'LeadSynth1',
    startRow: 9
  }];


const InstrumentsReducer = (state = defaultInstruments, action) => {
  switch(action.type){
    case ADD_INSTRUMENT:
      let newState = state.slice(0);
      let lastStartRow = newState[newState.length - 1].startRow;
      let newInstrument = { name: action.name,
                            startRow: lastStartRow + 8 };
      newState.push(newInstrument);
      return newState;
    case REMOVE_INSTRUMENT:
      newState = [];

      for (var i = 0; i < state.length; i++) {
        if (state[i].name !== action.name) {
          newState.push(state[i]);
        }
      }

      return newState;
    default:
      return state;
  }
};

export default InstrumentsReducer;
