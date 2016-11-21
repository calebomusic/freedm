import { connect } from 'react-redux';
import Playback from './playback';
// Actions
import { startPlayback, stopPlayback } from '../../actions/playback_actions';

const mapStateToProps = state => ({
  playback: state.playback,
  column: state.column,
  bpm: state.bpm,
  volume: state.volume
});

const mapDispatchToProps = dispatch => ({
  requestPlaybacks: () => dispatch(startPlayback()),
  createPlayback: playback => dispatch(stopPlayback(playback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playback);
