# Freedm

Freedm is a dynamic music sequencer app created by [Eric Kwok](https://github.com/kwokeric) and [Caleb Ontiveros](https://github.com/calebomusic).

[Live](https://calebomusic.github.io/freedm/index.html)

![Deck Layout](./docs/screenshot.png)

## Features

- Plays looping sounds
- Buttons for toggling play, pause and stop
- BPM/tempo adjustment
- Slider to change volume
- Visualizer (waveform)
- Tabs for drumkit and melody

## Technologies and Implementation

Freedm is built with React and Redux. We incorporate Howler.JS for sound playback and the Web Audio API with canvas to render the dynamic music visualizer.

Below we cover the general application state, the visualizer, and the playback and tab components.

### Application State

  Following Redux principles, there is a single store or application state that serves as the single source of truth. An example application state is:

  ```javascript
  {
    bpm: 125,
    column: 0,
    instruments: [
        {
          name: "DrumKit1",
          startRow: 1
        },
        {
          name: "LeadSynth1",
          startRow: 8
        }
      ],
    playback: false,
    selectedSounds: {
        1: {
          1: false,
          2: false,
          3: true,
          4: false
          ...
        }
        2: Object,
        3: Object,
        4: Object,
        ...
      },
      volume: 0.7
    }
  ```

  Application state then holds everything necessary for a functional sequencer: bpm, the current column, instruments, playback, selected sounds, and volume.

### Visualizer

The visualizer setup required linking the Web Audio API with the Howler.js library.

To extract data from the audio source - a master Howler object that combines individual Howler sounds - we first created an AnalyserNode in the Howler Web Audio context using the `createAnalyser()` method.
```JavaScript
this.analyser = Howler.ctx.createAnalyser();
```
This master Howler audio source is then connected to the analyzer via the `connect()` method:
```JavaScript
Howler.masterGain.connect(this.analyser);
```
Finally the masterGain node is directly connected to the destination node:
```JavaScript
this.analyser.connect(Howler.ctx.destination);
```
The fast Fourier transform (FFT) converts a signal from its original domain (in this case, sound waves) to a representation in the frequency domain.
```JavaScript
this.analyser.fftSize = 256;
```
The `frequencyBinCount` ( a property of the AnalyserNode interface) equates to the number of data values we used for the visualization.
```JavaScript
this.bufferLength = this.analyser.frequencyBinCount;
```

### Playback

  The primary functionality of the app, playback, logic is handled by an individual React `Playback` component. When the user presses play the `startPlayback` action is fired, setting the `playback` slice of state to true. Because `Playback` is connected to the `playback` slice of state the Redux lifecycle `componentWillReceiveProps` is fired. Crucially this function clears and then starts the `play` interval:

  ```javascript
  window.clearInterval(this.play);
  this.play = window.setInterval(this.step, newProps.bpm)
  ```

  The `step` function is called as often as the bpm dictates. `step` calls `changeColumn`, which updates the current column, and `playSounds` which plays every selected sound as follows:

  ```javascript
  playSounds() {
    for (let row = 1; row < this.maxStartRow + 8; row++) {
      if (this.props.selectedSounds[row][this.props.column]) {
        let instrumentIdx = Math.floor(row / 8);
        let soundRow = (row % 8 === 0) ? 8 : (row % 8);

        if (row % 8 === 0) {
          instrumentIdx = Math.floor(row / 8) - 1;
        }

        let instrumentName = this.props.instruments[instrumentIdx].name;

        Instruments[instrumentName][soundRow].play();
      }
    }
  }
  ```

  The `selectedSounds` slice of state contains the information about which sounds to play at which column. The first key of the object represents the row, the second key the column, and the value convey whether that sound is selected or not. Thus structure of the object mirrors the structure of the cells displayed on the browser. Hence if `this.props.selectedSounds[row][this.props.column]`, the sound at that row and column is selected and should be played.

  The `Instruments` constant contains instrument names which serve as keys to the HowerlerJS objects of that instrument. These objects receive the `play` method when they are selected. `soundRow` is calculated by modding by 8 in order to allow the app to incorporate different instruments, in different orders, and avoiding hard coding.

## Future Directions
  We plan to add to this app by implementing the following features:

##### Instrument Swapping
  - Adding the ability to swap additional drum kits and synthesizers

##### More Music & Scrolling
  - Adding additional bars and seamlessly scroll through the bars in time with the bpm.
