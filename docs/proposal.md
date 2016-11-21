# Freedm

## Background

Freedm is a music creation app that comes with 8 different drum sounds - standard sounds like kicks, claps, and snares - and the melodic sound pack includes sampled musical instruments.

## Functionality & MVP

Freedm features:

- Plays looping sounds based on user composition
- Adjustable controls
  - Buttons for toggling play/pause
  - Slider for setting tempo/bpm
  - Dial for volume
- Visualizer displaying waveforms in real-time
- Tabs for percussion and melody

Bonus features:

- Edit virtual synthesizer - frequencies, oscillators, etc.
- Manipulate volume of each sound
- Recording

## Wireframe

This app will consist of a single screen with a board, instructions, and nav links to the Github repo.

![Wireframe](https://github.com/calebomusic/freedm/blob/master/docs/sequencer.png)

## Architecture and Technologies

Freedm was written in JavaScript and utilized Howler library. In addition to the webpack entry file, the project will contain the following scripts:

`sequencer.js`
- Render root.js

`board.js`
- Keeps track of which `tab` is selected and passes props to `tab.js`

  `tab.js`
  - Renders buttons for selected tab
  - Highlights column based on `column` in state

`visualizer`
- Renders visualizer

`controls.js`
- Contains clear button click handler
- Renders about modal

  `playback.js`
  - Renders play/pause
  - Sets interval based on `bpm`
  - Handles playback logic (start/stop) based on `playing` boolean

  `bpm.js`
  - Renders bpm based on `bpm` value

  `volume.js`
  - Renders volume based on `volume` value

`util.js`
- Defines and exports sound objects

### State

```javascript
{
  playing: boolean,
  bpm: integer,
  tab: "drums" || "melody",
  column: integer,
  volume: integer,
  selectedSounds: {
    col1: { 1: boolean, 2: boolean, 3: boolean, ...},
    col2: { 1: boolean, 2: boolean, 3: boolean, ...},
    col3: { 1: boolean, 2: boolean, 3: boolean, ...},
    ...
  }
}
```

### Redux

- Playing:
  - Reducer:
    - `playing`
  - Actions:
    - `start`
    - `stop`
- BPM:
  - Reducer:
    - `bpm`
  - Actions:
    - `updateBpm`
- Tab:
  - Reducer:
    - `tab`
  - Actions:
    - `updateTab`
- Column:
  - Reducer:
    - `column`
  - Actions:
    - `updateColumn`
- Volume:
  - Reducer:
    - `volume`
  - Actions:
    - `updateVolume`
- Selected Sounds:
  - Reducer:
    - `selectedSounds`
  - Actions:
    - `clearSounds`
    - `addSound`
    - `removeSound`

## Implementation Timeline

### Phase 1: Node modules (1 day)

- Set up all necessary Node modules, including webpack
- Create `webpack.config.js` as well as `package.json`
- Write a basic entry file and the bare bones of all scripts outlined above

### Phase 2: Render components and cells (3 days)

- Create set interval ticker
- Render tabs and cells
- Style cells - selected: true/false, playing: true/false

### Phase 3: Playback (3 day)

- Play sounds on cell selection
- Play board on play/pause selection
- Implement controls to adjust playback

### Phase 4: Visualizer, About Modal, and Styling (2 day)

- Add visualizer component
- Add `about` modal
- Style the frontend, making it polished and clean

### Bonus features

- Add more sounds that can be selected on board
- Recording
- Manipulate volume of each sound
