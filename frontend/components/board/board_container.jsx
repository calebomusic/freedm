import { connect } from 'react-redux';
import Board from './board';

import { updateTab } from '../../actions/tab_actions';
import { removeInstrument,
         addInstrument } from '../../actions/instruments_actions';

const mapStateToProps = ({ instruments }) => ({
  instruments
});

const mapDispatchToProps = dispatch => ({
  updateTab: tab => dispatch(updateTab(tab)),
  removeInstrument: name => dispatch(removeInstrument(name)),
  addInstrument: name => dispatch(addInstrument(name))
  // Either also dispatch import EXTEND_ON_NEW_INSTRUMENT,
          //  SHRINK_ON_NEW_INSTRUMENT on the corresponding instrument action in this componentWillMount
          // or dispatch in instrument middleware
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
