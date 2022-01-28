import * as Tone from 'tone'

const synth = new Tone.PolySynth().toDestination();

export const playNote = (name: string, octave: string) => {
  synth.triggerAttackRelease(`${name}${octave}`, "8n");
}

export const playPressedNote = (pressedKey:any, name: string, octave: string, key: string) => {
  console.log(pressedKey)
  if (pressedKey == key) {
    synth.triggerAttackRelease(`${name}${octave}`, "8n")
  }
}