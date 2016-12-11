import { connect } from 'react-redux';
import Clear from './clear';

import { clearSelectedSounds } from '../../../actions/selected_sounds_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  clearSelectedSounds: () => dispatch(clearSelectedSounds())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clear);
