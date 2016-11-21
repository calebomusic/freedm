import { combineReducers } from 'redux';

import BPMReducer from 'bpm_reducer';
import ColumnReducer from 'column_reducer';
import PlaybackReducer from 'playback_reducer';
import SelectedSoundsReducer from 'selected_sounds_reducer';
import TabReducer from 'tab_reducer';
import VolumeReducer from 'volume_reducer';

const RootReducer = combineReducers({
  bpm: BPMReducer,
  column: ColumnReducer,
  playback: PlaybackReducer,
  selectedSounds: SelectedSoundsReducer,
  tabs: TabReducer,
  volume: VolumeReducer
})
