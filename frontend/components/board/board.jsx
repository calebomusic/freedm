import React from 'react';
import TabContainer from './tab_container';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedTab: "DrumKit"};
    this.renderTabButtons = this.renderTabButtons.bind(this);
  }

  changeTab(tab) {
    return (e) => {
      e.preventDefault();
      this.setState({selectedTab: tab});
    };
  }

  isActive (tab) {
    return ((tab === this.state.selectedTab) ? "active" : "default" );
  }

  renderTabButtons() {
    const tabs = [];

    for (var i = 0; i < this.props.instruments.length; i++) {
      let instrument = this.props.instruments[i];

      tabs.push(
        <div key={`instrument-${i}`}
             className={`btn-drumkit ${this.isActive(instrument.name)}`}
             onClick={this.changeTab(instrument.name)}>
          {instrument.name}
        </div>
      )
    }

    return tabs;
  }

  render() {
    return(
      <div className="board-container">
        <div className="tab-buttons">
          {this.renderTabButtons()}
        </div>


        <TabContainer tab={this.state.selectedTab} />
      </div>
    );
  }
}

export default Board;
