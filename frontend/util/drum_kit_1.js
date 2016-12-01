import { Howl } from 'howler';

const hihat2 = new Howl({
  src: ['samples/drum-kits/1/1-hihat2.wav']
});

const hihat1 = new Howl({
  src: ['samples/drum-kits/1/1-hihat1.wav']
});

const tom = new Howl({
  src: ['samples/drum-kits/1/1-tom.wav']
});

const snare3 = new Howl({
  src: ['samples/drum-kits/1/1-snare3.wav']
});

const snare2 = new Howl({
  src: ['samples/drum-kits/1/1-snare2.wav']
});

const snare1 = new Howl({
  src: ['samples/drum-kits/1/1-snare1.wav']
});

const kick2 = new Howl({
  src: ['samples/drum-kits/1/1-kick2.wav']
});

const kick1 = new Howl({
  src: ['samples/drum-kits/1/1-kick1.wav']
});

export default {
  1: hihat2,
  2: hihat1,
  3: tom,
  4: snare3,
  5: snare2,
  6: snare1,
  7: kick2,
  8: kick1
};
