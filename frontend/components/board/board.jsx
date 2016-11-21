import React from 'react';
import TabContainer from './tab_container';

// Components

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.tab = "drums";
  }

  handleClick() {

  }

  render() {
    return(
      <div className="board">
        <TabContainer tab={this.tab} />
      </div>
    );
  }
}

export default Board;
