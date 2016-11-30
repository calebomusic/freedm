import React from 'react';


const DRUM_NAMES = [
  "hi-hat2",
  "hi-hat1",
  "tom",
  "snare3",
  "snare2",
  "snare1",
  "kick2",
  "kick1"
]

const NOTE_NAMES = [
  "C2",
  "Bb",
  "Ab",
  "G",
  "F",
  "Eb",
  "D",
  "C1"
]


class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.renderCell = this.renderCell.bind(this);
    this.addSound = this.addSound.bind(this);
    this.removeSound = this.removeSound.bind(this);

    this.renderCells = this.renderCells.bind(this);
    // this.newDrumKit = this.newDrumKit.bind(this);
  }

  // drumkit() {
  //   let drumkitListItems = [];
  //
  //   for (let row = 1; row < 9; row++) {
  //     drumkitListItems.push(this.renderRow(row, tracks[row]));
  //   }
  //
  //   return(
  //     <ul className="drumkit-tracks">
  //       {drumkitListItems}
  //     </ul>
  //   );
  // }

  // newDrumKit() {
  //   return(
  //     {this.renderCells()}
  //   );
  // }
  //
  // melody() {
  //   let melodyListItems = [];
  //
  //   for (let row = 9; row < 17; row++) {
  //     melodyListItems.push(this.renderRow(row, tracks[row]));
  //   }
  //
  //   return(
  //     <ul className="melody-tracks">
  //       {melodyListItems}
  //     </ul>
  //   );
  // }

  renderCells(start) {
    const cells = [];

    for (let row = start; row < (start + 8); row++) {
      let cellRow = [];
      for (let col = 1; col < 17; col++) {
        cellRow.push(this.renderCell(row, col));
      }
      cells.push(
        <ul className='cell-row'
            key={`cell-row-${row}`}>
          {cellRow}
        </ul>);
    }

    return (
      <div className="cell-container">
        {cells}
      </div>
    );
  }

  // renderRow(row, track) {
  //   let cells = [];
  //
  //   for (let col = 1; col < 17; col++) {
  //     cells.push(this.renderCell(row, col));
  //   }
  //
  //   return(
  //     <li className={`row-${track}`} key={`row-${track}`}>
  //       <div className={`label-${track}`}>{track}</div>
  //       <div className="cell-container">
  //         <ul className={`cells-${track}`}>
  //           {cells}
  //         </ul>
  //       </div>
  //     </li>
  //   );
  // }

  renderRowTitleButtons(instrumentName) {
    const names = instrumentName[0] == 'D' ? DRUM_NAMES : NOTE_NAMES

    return names.map( name => (
      <li key={name}
          className={`label-${name}`}>
        {name}
      </li>
    ));
  }

  renderCell(row, col) {
    if (this.props.selectedSounds[row][col] && this.props.column === col) {
      return(
        <li className={`selected-current-column-cell-row${row}-col${col}`}
            key={`cell-row${row}-col${col}`}
            onClick={this.removeSound(row, col)}>
        </li>
      );
    } else if (this.props.selectedSounds[row][col]) {
      return(
        <li className={`selected-cell-row${row}-col${col}`}
            key={`cell-row${row}-col${col}`}
            onClick={this.removeSound(row, col)}>
        </li>
      );
    } else if (this.props.column === col) {
      return(
        <li className={`current-column-cell-row${row}-col${col}`}
            key={`cell-row${row}-col${col}`}
            onClick={this.addSound(row, col)}>
        </li>
      );
    } else if ( col % 8 === 0 || ((col % 8) > 4 && (col % 8) < 8)) {
      return(
        <li className={`alternating-cell-row${row}-col${col}`}
            key={`cell-row${row}-col${col}`}
            onClick={this.addSound(row, col)}>
        </li>
      );
    } else {
      return(
        <li className={`cell-row${row}-col${col}`}
            key={`cell-${row}-${col}`}
            onClick={this.addSound(row, col)}>
        </li>
      );
    }
  }

  addSound(row, col) {
    return () => this.props.addSelectedSound(row, col);
  }

  removeSound(row, col) {
    return () => this.props.removeSelectedSound(row, col);
  }

  render() {
    let tabName = "tab-" + this.props.tab;

    // TODO:// instrument name is a single letter for now. Change to name of instrument object

    if (this.props.tab === "drumkit") {
      return(
        <div className="drumkit-tracks-container">
          <div className='track-labels'>
            {this.renderRowTitleButtons('D')}
          </div>
          {this.renderCells(1)}
        </div>
      );
    } else {
      return(
        <div className="melody-tracks-container">
          <div className='track-labels'>
            {this.renderRowTitleButtons('M')}
          </div>
          {this.renderCells(9)}
        </div>
      );
    }
  }
}

export default Tab;
