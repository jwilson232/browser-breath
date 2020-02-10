// var input;

function setup() {
  createCanvas(400, 400);
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(freq);
  textSize(32);
  text("Hello", width/2, height/2);
}

function draw() {
  background(220);
}

function freq(freq){
  var A4 = 440;
  var C0 = A4 * pow(2, -4.75);
  var scaleNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var  userInput = input.value();

  h = round(12 * log(userInput/C0));
  octave = floor(h/12);
  n = h % 12;
  fill(32);
  textSize(32);
  console.log(name[n] + str(octave));
}
