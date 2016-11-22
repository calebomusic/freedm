import React from 'react';

import Header from './header';
import Controls from './controls/controls';
import BoardContainer from './board/board_container';
// import VisualizerContainer from 'visualizer_container';

const App = () => {
  return(
    <div>
      <Header />
      <div className="controls-and-visualizer">
        <Controls />
      </div>
      <BoardContainer />
    </div>
  );
};

export default App;
