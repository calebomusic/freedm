import React from 'react';

// Components

class Playback extends React.Component {
  constructor(props) {
    super(props);


    this.step = this.step.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.changeColumn = this.changeColumn.bind(this);
  }

  componentWillMount() {
    if (this.props.playback) {
      window.clearInterval(this.play);
      this.play = window.setInterval(this.step, this.props.bpm);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playback) {
      window.clearInterval(this.play);
      this.play = window.setInterval(this.step, newProps.bpm);
    }
  }

  start() {
    this.props.startPlayback();
  }

  stop() {
    window.clearInterval(this.playback);
    this.props.stopPlayback();
    this.props.resetColumn();
  }

  step() {
    window.clearInterval(this.playback)
    if (this.props && this.props.playback) {
      this.changeColumn();
    }
  }

  changeColumn() {
    this.props.updateColumn()
  }

  render() {
    let column, button;

    if (this.props) {
      column = this.props.column
      if (this.props.playback) {
        button =
          <button className='btn-playback-stop'
                  onClick={this.stop}>
            Stop
          </button>
      } else {
        button =
          <button className='btn-playback-play'
                  onClick={this.start}>
            Play
          </button>
      }
    }

    return(
      <div>
        {button}
        {column}
      </div>
    );
  }
};

export default Playback;
