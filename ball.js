function Ball(x, y) {

  this.index = 0;
  this.size = 0;
  this.maxSize = 0;
  this.born = false;
  this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
  this.r = 50;

  this.move = function() {
		if (this.born == true) {
    	if (moveBoxValue == true) {
        this.acc = createVector(random(-5, 5), random(-5, 5));
        this.acc.mult(0.005);
        this.vel.add(this.acc);
        this.pos.add(this.vel);


    }
  }

  this.wrapAround = function() {
  	if (this.born == true) {
      var bounce = 0.5;

      if (this.pos.x > width) {
        this.vel.x = -bounce;}

      if (this.pos.x < 0) {
        this.vel.x = bounce;}

      if (this.pos.y > height) {
        this.vel.y = -bounce;}

      if (this.pos.y < 0) {
        this.vel.y = bounce;}
    }
    }
  }

  this.show = function() {
    stroke(30);
    var r = map(this.pos.x, 0, width, 253, 51);
    var g = map(this.pos.y, 0, height, 240, 24);
    var b = map(this.size, 0, 1000, 213, 50);
    fill(r, g, b);
    ellipse(this.pos.x, this.pos.y, this.size + 10);
    if (mouseIsPressed && this.born == false) {
      this.index = -1
    }
  }

  this.breath = function() {
    if (this.index == 1) {
      this.size--;

    }
    if (this.index == -1) {
      this.size++;
		}
    if (0 > this.size) {
      this.index = -1;
      playSine(this.pos.x);

    }
    if (this.maxSize < this.size || this.size > 200) {
      this.index = 1;
		}
  }

  this.release = function() {
    if (this.born == false) {
      this.index = 1;
      this.maxSize = this.size;
      this.born = true;
    }
  }
}
