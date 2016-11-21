import { connect } from 'react-redux';
import Visualizer from './visualizer';
// Actions
import { requestVisualizers,
         createVisualizer,
         destroyVisualizer
       } from '../../actions/visualizer_actions';

const mapStateToProps = state => ({
  visualizers: state.visualizers
});

const mapDispatchToProps = dispatch => ({
  requestVisualizers: () => dispatch(requestVisualizers()),
  createVisualizer: visualizer => dispatch(createVisualizer(visualizer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visualizer);
