import { connect } from 'react-redux';
import Tab from './tab';
// Actions
import { addSelectedSound,
         removeSelectedSound
       } from '../../actions/selected_sounds_actions';

const mapStateToProps = ({selectedSounds, column}, ownProps) => ({
  tab: ownProps.tab,
  selectedSounds,
  column
});

const mapDispatchToProps = dispatch => ({
  addSelectedSound: (col, track) => dispatch(addSelectedSound(col, track)),
  removeSelectedSound: (col, track) => dispatch(removeSelectedSound(col, track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);
