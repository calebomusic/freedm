import React from 'react';

// Components

class Playback extends React.Component {
  constructor(props) {
    super(props);

    this.playback = window.setInterval(this.step, this.props.bpm / 600)
  }

  start() {
    if (this.playback) {
      this.changeColumn()
    }
  }

  stop() {
    clearInterval(this.playback);
    this.props.stopPlayback;
  }

  step() {
    if (this.props.playback) {
      this.start();
    }
  }

  changeColumn() {
    window.clearInterval(this.playback)
    this.props.updateColumn()
    this.playback = window.setInterval(this.changeColumn, this.props.bpm / 600)
  }

  render() {
    return(
      <div>play</div>
    );
  }
};

export default Playback;
