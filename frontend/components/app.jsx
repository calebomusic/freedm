import React from 'react';

import BoardContainer from 'board_container';
import Controls from 'controls_container';
// import VisualizerContainer from 'visualizer_container';

const App = () => {
  return(
    <div>
      <div className='app-header'>
        <Controls />
      </div>
      <BoardContainer />
    </div>
  )
}

export default App
