import React from 'react';
import { Howler } from 'howler';

// Components

class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {visualizer: "bars"};

    this.setup = this.setup.bind(this);
    this.draw = this.draw.bind(this);
  }

  componentWillMount() {
    setTimeout(this.setup, 100);
    setTimeout(this.draw, 100);
  }

  toggleVisualizer(type) {
    return (e) => {
      e.preventDefault();
      this.setState({visualizer: type});
      this.setup();
      this.draw();
    };
  }

  isActive(type) {
    return ((type === this.state.visualizer) ? "selected" : "hidden" );
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
    if (this.state.visualizer === "bars") {
      const drawVisual = requestAnimationFrame(this.draw);
    } else {
      return;
    }
    this.analyser.getByteFrequencyData(this.dataArray);

    this.canvasCtx.fillStyle = 'rgb(50, 50, 50)';
    this.canvasCtx.fillRect(0, 0, this.WIDTH, this.HEIGHT);

    var barWidth = (this.WIDTH / this.bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    for(var i = 0; i < this.bufferLength; i++) {
      barHeight = this.dataArray[i];

      this.canvasCtx.fillStyle = `rgb(${barHeight},${barHeight+25},${barHeight})`;
      this.canvasCtx.fillRect(x,this.HEIGHT-barHeight/2,barWidth,barHeight/2);

      x += barWidth + 1;
    }
  }

  render() {
    return(
      <div className="vis-toggle-container">
        <div className={`toggle-bars ${this.isActive("bars")}`}
             onClick={this.toggleVisualizer("none")}>
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
        </div>
        <div className={`toggle-none ${this.isActive("none")}`}
             onClick={this.toggleVisualizer("bars")}>
          <i className="fa fa-ban" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Visualizer;
