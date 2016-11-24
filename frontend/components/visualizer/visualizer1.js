class Visualizer {
  constructor(canvasCtx) {
    this.canvasCtx = canvasCtx;

    this.render = this.render.bind(this);
    this.draw = this.draw.bind(this);

    this.render();
  }

  render() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.minDecibels = -80;
    this.analyser.maxDecibels = 0;
    this.analyser.smoothingTimeConstant = 0.85;

    this.analyser.fftSize = 256;
    this.bufferLength = this.analyser.frequencyBinCount;

    this.dataArray = new Uint8Array(this.bufferLength);

    this.canvasCtx.clearRect(0, 0, 500, 110);
  }

  draw() {
    let drawVisual = requestAnimationFrame(this.draw);

    this.analyser.getByteFrequencyData(this.dataArray);

    this.canvasCtx.fillStyle = 'rgb(10, 10, 10)';
    this.canvasCtx.fillRect(0, 0, 500, 110);

    var barWidth = (500 / this.bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    for(var i = 0; i < this.bufferLength; i++) {
      barHeight = this.dataArray[i];

      this.canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
      this.canvasCtx.fillRect(x,110-barHeight/2,barWidth,barHeight/2);

      x += barWidth + 1;
    }
  }
}

export default Visualizer;
