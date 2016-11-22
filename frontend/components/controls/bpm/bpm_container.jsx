import { connect } from 'react-redux';
import Bpm from './bpm';
// Actions
import { updateBpm } from '../../../actions/bpm_actions';

const mapStateToProps = state => ({
  bpms: state.bpms
});

const mapDispatchToProps = dispatch => ({
  updateBpm: () => dispatch(updateBpm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bpm);
