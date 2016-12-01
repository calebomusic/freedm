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
        <canvas id="canvas">Your browser does not support canvas</canvas>
        <Visualizer />
      </div>
      <BoardContainer />
    </div>
  );
};

export default App;
