import React from 'react';

import Header from './header';
import Controls from './controls/controls';
import BoardContainer from './board/board_container';
import Visualizer from './visualizer/visualizer';

const App = (props) => {
  return(
    <div>
      <Header />
      <div className="controls-and-visualizer-container">
        <Controls />
        <canvas id="canvas"></canvas>
        <Visualizer />
      </div>
      <BoardContainer />
    </div>
  );
};

export default App;
