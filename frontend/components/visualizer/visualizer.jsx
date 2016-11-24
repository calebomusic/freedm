import React from 'react';
import { Howler } from 'howler';

// Components

class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = document.getElementsByTagName('canvas')[0];

    if (this.canvas) {
      this.analyser = Howler.ctx.createAnalyser();
      Howler.masterGain.connect(this.analyser);
      this.analyser.connect(Howler.ctx.destination);

      this.canvasCtx = canvas.getContext("2d");

      this.bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);
      this.analyser.getByteTimeDomainData(this.dataArray);
    } else {

    }


    this.drawBars = this.drawBars.bind(this);
  }

  drawBars() {
    this.canvasCtx.clearRect(0, 0, 500, 110);
    const drawVisual = requestAnimationFrame(this.drawBars);
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    this.canvasCtx.fillRect(0, 0, 500, 110);
    this.canvasCtx.lineWidth = 2;
    this.canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
    this.canvasCtx.beginPath();

    const sliceWidth = 400 * 1.0 / this.bufferLength;
    let x = 0;

    for (var i = 0; i < this.bufferLength; i++) {

      const v = this.dataArray[i] / 128.0;
      var y = v * 400 / 2;
      if (i === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    this.canvasCtx.lineTo(500, 110/2);
    this.canvasCtx.stroke();
  }

  render() {
    if (this.canvas) {
      this.drawBars();
    }

    return(
      <div>

      </div>
    );
  }
}

export default Visualizer;
