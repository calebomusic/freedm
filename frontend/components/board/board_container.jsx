import { connect } from 'react-redux';
import Board from './board';
// Actions
import { requestBoards,
         createBoard,
         destroyBoard
       } from '../../actions/board_actions';

const mapStateToProps = state => ({
  boards: state.boards
});

const mapDispatchToProps = dispatch => ({
  requestBoards: () => dispatch(requestBoards()),
  createBoard: board => dispatch(createBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
