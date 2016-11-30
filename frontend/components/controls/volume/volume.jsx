import React from 'react';
import { Howler } from 'howler';

class Volume extends React.Component {
  constructor(props) {
    super(props);

    this.state = { volume: 7 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();

    console.log(this.state.volume);

    const localVolume = parseInt(e.target.value);
    const howlerVolume = localVolume / 10;

    this.setState({volume: localVolume});

    this.props.updateVolume(howlerVolume);
    Howler.volume(howlerVolume)
  }

  render() {
    return(
      <div className='slider-volume'>
        <input type="range"
               min={0}
               max={10}
               step={1}
               value={this.state.volume}
               onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default Volume;
