import { connect } from 'react-redux';
import Playback from './playback';
// Actions
import { requestPlaybacks,
         createPlayback,
         destroyPlayback
       } from '../../actions/playback_actions';

const mapStateToProps = state => ({
  playbacks: state.playbacks
});

const mapDispatchToProps = dispatch => ({
  requestPlaybacks: () => dispatch(requestPlaybacks()),
  createPlayback: playback => dispatch(createPlayback(playback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playback);
