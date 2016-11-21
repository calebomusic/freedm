import React from 'react';
import TabContainer from './tab_container';

// Components

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.tab = "drums";
  }

  handleClick(tab) {
    this.tab = tab;
  }

  render() {
    return(
      <div className="board-container">
        <div className="tab-buttons">
          <div className="btn-drums" onClick={this.handleClick("drums")}>DRUMS</div>
          <div className="btn-melody" onClick={this.handleClick("melody")}>MELODY</div>
        </div>

        <TabContainer tab={this.tab} />
      </div>
    );
  }
}

export default Board;
