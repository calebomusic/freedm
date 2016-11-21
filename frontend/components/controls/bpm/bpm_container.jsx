import { connect } from 'react-redux';
import Bpm from './bpm';
// Actions
import { requestBpms,
         createBpm,
         destroyBpm
       } from '../../actions/bpm_actions';

const mapStateToProps = state => ({
  bpms: state.bpms
});

const mapDispatchToProps = dispatch => ({
  requestBpms: () => dispatch(requestBpms()),
  createBpm: bpm => dispatch(createBpm(bpm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bpm);
