import React from 'react';

import PlaybackContainer from './playback_container';
import VolumeContainer from 'playback_container';
import BPMContainer from './bpm/bpm_container';
import ClearContainer from './clear/clear_container';
import AboutModal from './about_modal.jsx';

const Controls = () => (
  <div className='controls'>
    <PlaybackContainer />
  </div>
)

export default Controls

// <VolumeContainer />
// <BPMContainer />
// <ClearContainer />
// <AboutModal />
