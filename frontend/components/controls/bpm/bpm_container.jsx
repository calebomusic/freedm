import { connect } from 'react-redux';
import Bpm from './bpm';

import { updateBpm } from '../../../actions/bpm_actions';

const mapStateToProps = state => ({
  bpm: state.bpm
});

const mapDispatchToProps = dispatch => ({
  updateBpm: (bpm) => dispatch(updateBpm(bpm)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bpm);
