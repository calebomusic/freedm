import { connect } from 'react-redux';
import Playback from './playback';

import { startPlayback, stopPlayback } from '../../actions/playback_actions';
import { updateColumn, resetColumn } from '../../actions/column_actions';

const mapStateToProps = state => ({
  bpm: state.bpm,
  column: state.column,
  instruments: state.instruments,
  playback: state.playback,
  selectedSounds: state.selectedSounds,
  volume: state.volume
});

const mapDispatchToProps = dispatch => ({
  startPlayback: () => dispatch(startPlayback()),
  stopPlayback: () => dispatch(stopPlayback()),
  updateColumn: () => dispatch(updateColumn()),
  resetColumn: () => dispatch(resetColumn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playback);
