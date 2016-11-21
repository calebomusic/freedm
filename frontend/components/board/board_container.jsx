import { connect } from 'react-redux';
import Board from './board';
// Actions
import { updateTab } from '../../actions/tab_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateTab: () => dispatch(updateTab())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
