import React from 'react';

// Components

class Volume extends React.Component {
  constructor(props) {
    super(props);

    this.state = { volume: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    const newVolume = parseInt(e.target.value);
    this.setState({volume: newVolume});
    this.props.updateVolume(newVolume);
  }

  render() {
    return(
      <div className='slider-volume'>
        <input type="range"
               min={0}
               max={100}
               value={this.state.volume}
               onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default Volume;
