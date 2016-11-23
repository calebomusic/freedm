import React from 'react';
import LeadSynths from '../../util/lead_synth_1';
import { isEqual } from 'lodash';

// Components

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
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playback && newProps.volume === this.props.volume
                          && newProps.bpm === this.props.bpm
                          && isEqual(newProps.selectedSounds, this.props.selectedSounds)) {
      window.clearInterval(this.play);
      this.play = window.setInterval(this.step, newProps.bpm);
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
    for (let row = 1; row < 17; row++) {
      if (this.props.selectedSounds[row][this.props.column]) {
        LeadSynths[row].play();
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
        {column}
      </div>
    );
  }
}

export default Playback;
