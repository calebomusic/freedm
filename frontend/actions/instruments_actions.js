export const REMOVE_INSTRUMENT = 'REMOVE_INSTRUMENT';
export const ADD_INSTRUMENT = 'ADD_INSTRUMENT';

export const removeInstrument = (name) => (
  {
    type: REMOVE_INSTRUMENT,
    name
  }
)

export const addInstrument = (name) => (
  {
    type: ADD_INSTRUMENT,
    name
  }
)
