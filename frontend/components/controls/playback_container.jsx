import { connect } from 'react-redux';
import Playback from './playback';
// Actions
import { startPlayback, stopPlayback } from '../../actions/playback_actions';
import { updateColumn, resetColumn } from '../../actions/column_actions'

const mapStateToProps = state => ({
  playback: state.playback,
  column: state.column,
  bpm: state.bpm
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
