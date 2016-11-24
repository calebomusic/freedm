import React from 'react';
import ReactDOM from 'react-dom';
import { Howler } from 'howler';
//
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

  window.store = store;

  // Create an analyser node in the Howler WebAudio context
  const analyser = Howler.ctx.createAnalyser();

  // Connect the masterGain -> analyser (disconnecting masterGain -> destination)
  Howler.masterGain.connect(analyser);

  // Connect the analyser -> destination
  analyser.connect(Howler.ctx.destination);

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteTimeDomainData(dataArray);

  const canvas = document.getElementsByTagName('canvas')[0]
  const canvasCtx = canvas.getContext("2d")

  canvasCtx.clearRect(0, 0, 400, 400);

  function draw() {
    const drawVisual = requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);
    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, 400, 400);
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
    canvasCtx.beginPath();

    const sliceWidth = 400 * 1.0 / bufferLength;
    let x = 0;

    for (var i = 0; i < bufferLength; i++) {

      const v = dataArray[i] / 128.0;
      var y = v * 400 / 2;
      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height/2);
    canvasCtx.stroke();
  }

  draw();
});
