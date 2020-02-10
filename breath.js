new p5();

let ball = [];
let ballNo = 0;
let drawButton;
let move;
let slider;
let moveBox;
let moveBoxValue;
let beginButton;
let beginPressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight - 75 );
  moveBox = createCheckbox('Move', false);
  moveBox.changed(checkedEvent);
  moveBox = createCheckbox('Follow Mouse', false);
  startButton = createButton('Start');
  startButton.mousePressed(beginAudio);
}

function checkedEvent() {
  if (this.checked()) {
    moveBoxValue = true;
  } else {
    moveBoxValue = false;
    }
}

function draw() {
  background(40);
  if (beginPressed){
    for (var i = 0; i < ball.length; i++) {
      ball[i].show();
      ball[i].breath();
      ball[i].move();
      ball[i].wrapAround();
    }
  }
}

function mouseReleased() {
  for (var i = 0; i < ball.length; i++) {
    ball[i].release();
  }
}

function mousePressed() {
  if (mouseX < width && mouseY < height) {
    var b = new Ball(mouseX, mouseY);
    ball.push(b);
  }
}
