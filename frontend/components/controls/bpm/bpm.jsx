import React from 'react';

// Components

class Bpm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bpm: this.props.bpm };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    const newBpm = parseInt(e.target.value);
    this.setState({bpm: newBpm});
    this.props.updateBpm(60000 / newBpm);
  }

  handleDecrement(e) {
    e.preventDefault();
    let val = $(".bpm-input").val();
    if (val <= 60) {
      $(".bpm-input").val(60);
    } else {
      $(".bpm-input").val(val-1);
    }
  }

  handleIncrement(e) {
    e.preventDefault();
    let val = parseInt($(".bpm-input").val());
    if (val >= 160) {
      $(".bpm-input").val(160);
    } else {
      $(".bpm-input").val(val+1);
    }
  }

  render() {
    return(
      <div className='bpm-container'>
        <div className="input-number-decrement"
              onClick={this.handleDecrement}>–</div>
        <input className='bpm-input'
               type="number"
               min={60}
               max={160}
               step={1}
               value={this.state.bpm}
               onChange={this.handleChange}></input>
        <div className="input-number-increment"
             onClick={this.handleIncrement}>+</div>
      </div>
    );
  }
}

export default Bpm;
