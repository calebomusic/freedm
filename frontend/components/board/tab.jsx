import React from 'react';

// Components

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }

  drums() {
    const tracks =  [
      "Kick1",
      "Kick2",
      "Snare1",
      "Snare2",
      "Snare3",
      "Hi-hat1",
      "Hi-hat2",
      "clap"
    ];

    // let asdf;
    //
    // tracks.forEach((track) => (
    //   <li className="track {track}">{track}</li>
    // ));

    // return(
    //   <ul className="drum-tracks">
    //   </ul>
    // );
    return(
      <div>DRUMS Test</div>
    );
  }

  render() {
    let tabName = "tab-" + this.props.tab;

    if (this.props.tab === "drums") {
      // return(<div>Drums TAB</div>);

      return(this.drums());
    } else {
      return(<div>MELODY TAB</div>);
      // return(this.melody);
    }
  }
}

export default Tab;
