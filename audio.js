
var osc;
var finalNote;
var scaleNotes = ["B", "C#", "D#", "E#", "F#", "G#", "A#"];  //b lydian scale
var chorus = new Tone.Chorus(4, 2.5, 0.5);
var tremolo = new Tone.Tremolo();
var reverb = new Tone.Reverb();
var poly = new Tone.PolySynth(100, Tone.Synth);
var lowPass = new Tone.Filter(300, "lowpass", -12);

function beginAudio() {

    poly.set({
      oscillator:{
      type: "sine"
        }
      });

      reverb.generate();
      reverb.set("wet", 0.5);
      poly.volume.value = -20;

      poly.chain(chorus, tremolo, reverb, lowPass, Tone.Master);
      beginPressed = true;
      startButton.hide();
}

function playSine(x) {

  var dur = 0.2;
  var time = 0;
  var vel = 0.1;

  var C0 = 440 * pow(2, -4.75);

  var note;
  var scaledFreq;
  var playNote;

  scaledFreq = map(x, 0, 50, 200, 7500);
  h = round(scaleNotes.length * log(scaledFreq/C0));
  octave = floor(h/scaleNotes.length) - 4;
  n = h % scaleNotes.length;
  playNote = (scaleNotes[n] + str(octave));
  poly.triggerAttackRelease(playNote, 0.02);
  console.log(playNote);
}
