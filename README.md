# Freedm

Freedm is a music creation sequencer app modeled after analog DJ equipment. Users can express their creativity and play any combination of 16 different sounds - drum and melodic - to a rhythm. The drum kit sound pack includes standard sounds like kicks, claps, and snares and the melodic sound pack includes sampled musical instruments.

![Deck Layout](./docs/screenshot.png)

## Features

- Plays looping sounds
- Buttons for toggling play, pause and stop
- BPM/tempo adjustment
- Slider to change volume
- Visualizer (waveform)
- Tabs for drumkit and melody

## Technology Overview

Freedm was built with JavaScript with a Redux cycle for interaction between the back and front end; HTML canvas and Web Audio API for rendering the visualizer; and React.js and Howler.js library for playback functionality and player progress simulation.

### Visualizer

The visualizer was particularly tricky to implement because it required linking the Web Audio API with the Howler.js library - a task with very little documentation. Below is a code snippet for how we analyzed sound coming from Howler objects.

```
this.analyser = Howler.ctx.createAnalyser();
Howler.masterGain.connect(this.analyser);
this.analyser.connect(Howler.ctx.destination);

this.analyser.fftSize = 256;
this.bufferLength = this.analyser.frequencyBinCount;
this.dataArray = new Uint8Array(this.bufferLength);
```

To extract data from the audio source (a locally saved .wav file) we first created an AnalyserNode using the .createAnalyser() method.
```
this.analyser = Howler.ctx.createAnalyser();
```
This node is then connected to the Howler audio source via the connect() method:
```
Howler.masterGain.connect(this.analyser);
```

## Bonus

- Edit virtual synthesizer - frequencies, oscillators, etc.
- Manipulate volume of each sound
- Recording
