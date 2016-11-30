import React from 'react';

import PlaybackContainer from './playback_container';
import VolumeContainer from './volume/volume_container';
import BPMContainer from './bpm/bpm_container';
import ClearContainer from './clear/clear_container';
import AboutModal from './about_modal.jsx';

const Controls = () => (
  <div className='controls-container'>
    <div className="controls-1">
      <PlaybackContainer />
      <BPMContainer />
    </div>
    <div className="controls-2">
      <VolumeContainer />
      <ClearContainer />
      <AboutModal />
    </div>
  </div>
);

export default Controls;
