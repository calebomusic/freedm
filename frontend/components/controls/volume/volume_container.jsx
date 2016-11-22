import { connect } from 'react-redux';
import Volume from './volume';
// Actions
import { updateVolume } from '../../../actions/volume_actions';

const mapStateToProps = state => ({
  volumes: state.volume
});

const mapDispatchToProps = dispatch => ({
  updateVolume: volume => dispatch(updateVolume(volume))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Volume);
