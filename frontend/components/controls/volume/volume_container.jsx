import { connect } from 'react-redux';
import Volume from './volume';
// Actions
import { requestVolumes,
         createVolume,
         destroyVolume
       } from '../../actions/volume_actions';

const mapStateToProps = state => ({
  volumes: state.volumes
});

const mapDispatchToProps = dispatch => ({
  requestVolumes: () => dispatch(requestVolumes()),
  createVolume: volume => dispatch(createVolume(volume))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Volume);
