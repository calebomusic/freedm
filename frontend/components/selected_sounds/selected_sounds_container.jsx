import { connect } from 'react-redux';
import SelectedSounds from './selected_sounds';

import { requestSelectedSounds,
         createSelectedSounds,
         destroySelectedSounds
       } from '../../actions/selected_sounds_actions';

const mapStateToProps = state => ({
  selected_sounds: state.selected_sounds
});

const mapDispatchToProps = dispatch => ({
  requestSelectedSounds: () => dispatch(requestSelectedSounds()),
  createSelectedSounds: selectedSounds => dispatch(createSelectedSounds(selectedSounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedSounds);
