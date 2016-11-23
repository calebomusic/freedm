import { Howl } from 'howler';

const clap = new Howl({
  src: ['samples/drum-kits/1/1-tom.wav']
})

const hihat2 = new Howl({
  src: ['samples/drum-kits/1/1-hihat2.wav']
})

const hihat1 = new Howl({
  src: ['samples/drum-kits/1/1-hihat1.wav']
})

const snare3 = new Howl({
  src: ['samples/drum-kits/1/1-snare3.wav']
})

const snare2 = new Howl({
  src: ['samples/drum-kits/1/1-snare2.wav']
})

const snare1 = new Howl({
  src: ['samples/drum-kits/1/1-snare1.wav']
})

const kick2 = new Howl({
  src: ['samples/drum-kits/1/1-kick2.wav']
})

const kick1 = new Howl({
  src: ['samples/drum-kits/1/1-kick1.wav']
})

export const drumKit1 = {
  1: kick1,
  2: kick2,
  3: snare1,
  4: snare2,
  5: snare3,
  6: tom,
  7: hihat1,
  8: hihat2
}
