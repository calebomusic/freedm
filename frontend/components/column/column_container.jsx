import { connect } from 'react-redux';
import Column from './column';
// Actions
import { requestColumns,
         createColumn,
         destroyColumn
       } from '../../actions/column_actions';

const mapStateToProps = state => ({
  columns: state.columns
});

const mapDispatchToProps = dispatch => ({
  requestColumns: () => dispatch(requestColumns()),
  createColumn: column => dispatch(createColumn(column))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
