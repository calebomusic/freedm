import { connect } from 'react-redux';
import Tab from './tab';

import { addSelectedSound,
         removeSelectedSound
       } from '../../actions/selected_sounds_actions';

const mapStateToProps = ({selectedSounds, column, instruments}, ownProps) => ({
  column,
  instruments,
  selectedSounds,
  tab: ownProps.tab
});

const mapDispatchToProps = dispatch => ({
  addSelectedSound: (col, track) => dispatch(addSelectedSound(col, track)),
  removeSelectedSound: (col, track) => dispatch(removeSelectedSound(col, track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);
