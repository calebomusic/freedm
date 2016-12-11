import React from 'react';

class Bpm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bpm: 15000 / this.props.bpm };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.decrement = this.decrement.bind(this);
    this.releaseDecrement = this.releaseDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.increment = this.increment.bind(this);
    this.releaseIncrement = this.releaseIncrement.bind(this);
  }

  handleDecrement(e) {
    e.preventDefault();

    if (this.state.bpm > 60) {
      this.decrement();
      this.decrementHold = window.setInterval(this.decrement, 250);
    }
  }

  decrement() {
    const newBpm = this.state.bpm - 1;

    if (newBpm >= 60) {
      this.setState(
        { bpm: newBpm },
        () => this.props.updateBpm(15000 / this.state.bpm));
    } else {
      window.clearInterval(this.decrementHold);
    }
  }

  releaseDecrement() {
    window.clearInterval(this.decrementHold);
  }

  handleIncrement(e) {
    e.preventDefault();

    if (this.state.bpm < 160) {
      this.increment();
      this.incrementHold = window.setInterval(this.increment, 250);
    }
  }

  increment() {
    const newBpm = this.state.bpm + 1;

    if (newBpm <= 160) {
      this.setState(
        { bpm: newBpm },
        () => this.props.updateBpm(15000 / this.state.bpm));
    } else {
      window.clearInterval(this.incrementHold);
    }
  }

  releaseIncrement() {
    window.clearInterval(this.incrementHold);
  }

  render() {
    return(
      <div className='bpm-container'>
        <div className="input-number-decrement"
             onMouseDown={this.handleDecrement}
             onMouseUp={this.releaseDecrement}>–</div>
        <div className='bpm-display'>
          {this.state.bpm}
        </div>
        <div className="input-number-increment"
             onMouseDown={this.handleIncrement}
             onMouseUp={this.releaseIncrement}>+</div>
      </div>
    );
  }
}

export default Bpm;
