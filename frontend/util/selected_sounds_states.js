import { merge } from 'lodash';

const nullState = {};

for (let i = 1; i < 17; i++) {
  let cells = {};
  for (let j = 1; j < 17; j++) {
    cells[j] = false;
  }
  nullState[i] = cells;
}

const demoState = merge({},nullState);
// Drumkit cells
demoState[2][2] = true;
demoState[2][4] = true;
demoState[2][7] = true;
demoState[2][9] = true;
demoState[2][10] = true;
demoState[2][11] = true;
demoState[2][16] = true;
demoState[3][15] = true;
demoState[4][13] = true;
demoState[5][5] = true;
demoState[7][3] = true;
demoState[8][1] = true;
demoState[8][5] = true;
demoState[8][9] = true;
demoState[8][13] = true;
// LeadSynth cells
demoState[9][15] = true;
demoState[10][12] = true;
demoState[10][14] = true;
demoState[12][4] = true;
demoState[12][5] = true;
demoState[12][10] = true;
demoState[12][11] = true;
demoState[16][1] = true;
demoState[16][3] = true;
demoState[16][8] = true;

export { nullState, demoState};
