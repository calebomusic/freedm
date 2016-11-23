import React from 'react';

// Components

class Bpm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bpm: this.props.bpm };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement(e) {
    e.preventDefault();
    if (this.state.bpm > 60) {
      this.state.bpm --;
      this.props.updateBpm(60000 / this.state.bpm);
    }
  }

  handleIncrement(e) {
    e.preventDefault();
    if (this.state.bpm < 160) {
      this.state.bpm ++;
      this.props.updateBpm(60000 / this.state.bpm);
    }
  }

  render() {
    return(
      <div className='bpm-container'>
        <div className="input-number-decrement"
             onMouseDown={this.handleDecrement}>–</div>
        <div className='bpm-display'>
          {this.state.bpm}
        </div>
        <div className="input-number-increment"
             onMouseDown={this.handleIncrement}>+</div>
      </div>
    );
  }
}

export default Bpm;
