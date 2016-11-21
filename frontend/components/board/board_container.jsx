import { connect } from 'react-redux';
import Board from './board';
// Actions
import { updateTab } from '../../actions/tab_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateTab: tab => dispatch(updateTab(tab))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
