import React from 'react';

// Components

class Bpm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bpm: 120 }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const newBpm = parseInt(e.target.value)
    this.setState({bpm: newBpm});
    this.props.updateBpm(60000 / newBpm);
  }

  render() {
    return(
      <div className='bpm'>
        <input type="number"
               min={60}
               max={160}
               step={1}
               value={this.state.bpm}
               onChange={this.handleChange}></input>
      </div>
    );
  }
};

export default Bpm;
