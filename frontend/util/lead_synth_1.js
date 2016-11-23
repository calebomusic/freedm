import { Howl } from 'howler';

const C  = new Howl({ src: ['samples/lead-synths/1/1-C.wav'] });
const D  = new Howl({ src: ['samples/lead-synths/1/1-D.wav'] });
const Eb = new Howl({ src: ['samples/lead-synths/1/1-Eb.wav'] });
const F  = new Howl({ src: ['samples/lead-synths/1/1-F.wav'] });
const G  = new Howl({ src: ['samples/lead-synths/1/1-G.wav'] });
const Ab = new Howl({ src: ['samples/lead-synths/1/1-Ab.wav'] });
const Bb = new Howl({ src: ['samples/lead-synths/1/1-Bb.wav'] });
const C2 = new Howl({ src: ['samples/lead-synths/1/1-C2.wav'] });

export const leadSynths = [C,D,Eb,F,G,Ab,Bb,C2];
