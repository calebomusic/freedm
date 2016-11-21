import { connect } from 'react-redux';
import Tab from './tab';
// Actions
import { requestTabs,
         createTab,
         destroyTab
       } from '../../actions/tab_actions';

const mapStateToProps = ({tab, selectedSounds}) => ({
  tab,
  selectedSounds
});

const mapDispatchToProps = dispatch => ({
  requestTabs: () => dispatch(requestTabs()),
  createTab: tab => dispatch(createTab(tab))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);
