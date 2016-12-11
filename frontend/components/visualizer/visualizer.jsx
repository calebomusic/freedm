import React from 'react';
import { Howler } from 'howler';

// Components

class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {visualizer: true};

    window.state = this.state;

    this.setup = this.setup.bind(this);
    this.draw = this.draw.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    setTimeout(this.setup, 100);
    setTimeout(this.draw, 100);
  }

  toggle() {
    return (e) => {
      e.preventDefault();
      if (this.state.visualizer) {
        this.setState({visualizer: false});
        this.state.visualizer = false;
      } else {
        this.setState({visualizer: true});
        this.state.visualizer = true;
      }
      this.draw();
    };
  }

  isActive(bool) {
    return ((bool === this.state.visualizer) ? "selected" : "hidden" );
  }

  setup() {
    const canvas = document.getElementsByTagName('canvas')[0];
    this.WIDTH = canvas.width;
    this.HEIGHT = canvas.height;

    this.analyser = Howler.ctx.createAnalyser();
    Howler.masterGain.connect(this.analyser);
    this.analyser.connect(Howler.ctx.destination);
    this.canvasCtx = canvas.getContext("2d");

    this.analyser.fftSize = 256;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);
  }

  draw() {
    this.canvasCtx.clearRect(0, 0, this.WIDTH, this.HEIGHT);

    if (this.state.visualizer) {
      const drawVisual = requestAnimationFrame(this.draw);
    } else {
      this.canvasCtx.fillStyle = 'rgb(50, 50, 50)';
      this.canvasCtx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
      return;
    }

    this.analyser.getByteFrequencyData(this.dataArray);

    this.canvasCtx.fillStyle = 'rgb(50, 50, 50)';
    this.canvasCtx.fillRect(0, 0, this.WIDTH, this.HEIGHT);

    let barWidth = (this.WIDTH / this.bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for(let i = 3; i < this.bufferLength; i++) {
      barHeight = this.dataArray[i];

      // original:
      // this.canvasCtx.fillStyle = `rgb(${barHeight-75},${barHeight-50},${barHeight-75})`;

      // this.canvasCtx.fillStyle = `rgb(${(barHeight % 10) + 39}, ${(barHeight % 20) + 165}, 97)`;
      // this.canvasCtx.fillStyle = `rgb(${barHeight % 10 + 64},140,97)`;
      this.canvasCtx.fillStyle = `rgb(72, 141, ${(85 + (i * 2))})`;

      // this.canvasCtx.fillStyle = `rgb(${barHeight  - 75},${(barHeight % 10) + 141}, ${(85 + (i * 2))}`;
      //green 74 140 85
      // blue 44, 104, 166
      this.canvasCtx.fillRect(x,this.HEIGHT-barHeight/2,barWidth,barHeight/2);

      x += barWidth + 1;
    }
  }

  render() {
    return(
      <div className="vis-toggle-container">
        <div className={`toggle-bars ${this.isActive(true)}`}
             onClick={this.toggle()}>
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
        </div>
        <div className={`toggle-none ${this.isActive(false)}`}
             onClick={this.toggle()}>
          <i className="fa fa-ban" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Visualizer;
