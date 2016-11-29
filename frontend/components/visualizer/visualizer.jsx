import React from 'react';
import { Howler } from 'howler';

// Components

class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {visualizer: "bars"};

    this.setup = this.setup.bind(this);
    this.drawLine = this.drawLine.bind(this);
    this.drawBars = this.drawBars.bind(this);
  }

  componentWillMount() {
    // setTimeout(this.setupLine, 100);
    // setTimeout(this.drawLine, 100);
    setTimeout(this.setup, 100);
    setTimeout(this.drawBars, 100);
  }

  toggleVisualizer(type) {
    return (e) => {
      e.preventDefault();
      this.setState({visualizer: type});
    };
  }

  isActive (type) {
    return ((type === this.state.visualizer) ? "selected" : "hidden" );
  }

  setup() {
    const canvas = document.getElementsByTagName('canvas')[0];

    this.analyser = Howler.ctx.createAnalyser();
    Howler.masterGain.connect(this.analyser);
    this.analyser.connect(Howler.ctx.destination);

    this.canvasCtx = canvas.getContext("2d");

    // // this.bufferLength = this.analyser.frequencyBinCount;
    // this.bufferLength = 800;
    // this.dataArray = new Uint8Array(this.bufferLength);
    // this.analyser.getByteTimeDomainData(this.dataArray);

    this.analyser.fftSize = 256;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);
  }

  drawLine() {
    const drawVisual = requestAnimationFrame(this.drawLine);
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    this.canvasCtx.fillRect(0, 0, 450, 150);
    this.canvasCtx.lineWidth = 2;
    this.canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
    this.canvasCtx.beginPath();

    const sliceWidth = 450 * 1.0 / this.bufferLength;
    let x = 0;

    for (var i = 0; i < this.bufferLength; i++) {
      const v = this.dataArray[i] / 128.0;
      var y = v * 450 / 2;

      if (i === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    this.canvasCtx.lineTo(450, 110/2);
    this.canvasCtx.stroke();
  }

  drawBars() {
    this.canvasCtx.clearRect(0, 0, 450, 150);
    const drawVisual = requestAnimationFrame(this.drawBars);
    this.analyser.getByteFrequencyData(this.dataArray);

    this.canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    this.canvasCtx.fillRect(0, 0, 450, 150);

    var barWidth = (450 / this.bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    for(var i = 0; i < this.bufferLength; i++) {
      barHeight = this.dataArray[i];

      this.canvasCtx.fillStyle = `rgb(${barHeight/2+30},${barHeight/2+55},${barHeight/2+30})`;
      this.canvasCtx.fillRect(x,110-barHeight/2,barWidth,barHeight/2);

      x += barWidth + 1;
    }
  }

  render() {
    return(
      <div className="vis-toggle-container">
        <div className={`toggle-bars ${this.isActive("bars")}`}
             onClick={this.toggleVisualizer("line")}>
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
        </div>
        <div className={`toggle-line ${this.isActive("line")}`}
             onClick={this.toggleVisualizer("none")}>
          <i className="fa fa-line-chart" aria-hidden="true"></i>
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
