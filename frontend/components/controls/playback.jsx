import React from 'react';
import { isEqual, max } from 'lodash';

import Instruments from '../../util/instruments';

class Playback extends React.Component {
  constructor(props) {
    super(props);

    this.step = this.step.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
    this.changeColumn = this.changeColumn.bind(this);
    this.playSounds = this.playSounds.bind(this);
  }

  componentWillMount() {
    if (this.props.playback) {
      window.clearInterval(this.play);
      this.play = window.setInterval(this.step, this.props.bpm);
    }
    // Return max key. Do this in CWRP
    const instruments = this.props.instruments;
    this.maxStartRow = instruments[instruments.length - 1].startRow;
  }

  componentDidMount() {
    let scrollTicker;
    // TODO: attempts at handling scrolling. Fix or remove.
    document.getElementsByClassName('cell-container')[0].addEventListener('scroll', (e) => {
      e.preventDefault();
      window.clearInterval(this.play);
      this.play = window.setInterval(this.step, this.props.bpm);
    });

    document.addEventListener('scroll', (e) => {
      e.preventDefault();
      window.clearInterval(this.play);
      this.play = window.setInterval(this.step, this.props.bpm);
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playback && newProps.volume === this.props.volume
                          && newProps.bpm === this.props.bpm
                          && isEqual(newProps.selectedSounds, this.props.selectedSounds)) {
      window.clearInterval(this.play);
      this.play = window.setInterval(this.step, newProps.bpm);
    }

    if (!isEqual(newProps.instruments, this.props.instruments)) {
      const instruments = this.props.instruments
      this.maxStartRow = instruments[instruments.length - 1].startRow;
    }
  }

  start() {
    this.props.startPlayback();
  }

  pause() {
    window.clearInterval(this.playback);
    this.props.stopPlayback();
  }

  stop() {
    window.clearInterval(this.playback);
    this.props.stopPlayback();
    this.props.resetColumn();
  }

  step() {
    window.clearInterval(this.playback);
    if (this.props && this.props.playback) {
      this.changeColumn();
      this.playSounds();
    }
  }

  playSounds() {
    for (let row = 1; row < this.maxStartRow + 8; row++) {
      if (this.props.selectedSounds[row][this.props.column]) {
        let instrumentIdx = Math.floor(row / 8);
        let soundRow = (row % 8 === 0) ? 8 : (row % 8);

        if (row % 8 === 0) {
          instrumentIdx = Math.floor(row / 8) - 1;
        }

        let instrumentName = this.props.instruments[instrumentIdx].name;

        Instruments[instrumentName][soundRow].play();
      }
    }

  }


  changeColumn() {
    this.props.updateColumn();
  }

  render() {
    let column, pausePlayButton;

    if (this.props) {
      column = this.props.column;

      if (this.props.playback) {
        pausePlayButton =
          <button className='btn-playback-pause'
                  onClick={this.pause}>
            <i className="fa fa-pause" aria-hidden="true"></i>
          </button>;
      } else {
        pausePlayButton =
          <button className='btn-playback-play'
                  onClick={this.start}>
            <i className="fa fa-play" aria-hidden="true"></i>
          </button>;
      }
    }

    let stopButton =
      <button className='btn-playback-stop'
              onClick={this.stop}>
        <i className="fa fa-stop" aria-hidden="true"></i>
      </button>;

    return(
      <div className="playback-container">
        {pausePlayButton}
        {stopButton}
      </div>
    );
  }
}

export default Playback;
