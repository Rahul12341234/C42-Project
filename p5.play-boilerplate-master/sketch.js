var hr, min, sec;

var secAngle, minAngle, hrAngle;

function setup() {
createCanvas(600, 600)
  hr = hour();
  min = minute();
  sec = second();
}

function draw() {
  background(0);
  ellipseMode(CENTER);
  fill(255);
  ellipse(300, 300, 400, 400);
  fill(0);
  ellipse(300, 300, 380, 380);

  angleMode(DEGREES);

  secAngle = map(sec, 0, 60, 0, 360);

  push();
  translate(300, 300)
  rotate(secAngle);
  stroke(random(0, 255),  random(0, 255), random(0, 255));
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  minAngle = map(min, 0, 60, 0, 360);

  push();
  translate(300, 300)
  rotate(minAngle);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(7);
  line(0, 0, 150, 0);
  pop();

  hrAngle = map(hr, 0, 60, 0, 360);

  push();
  translate(300, 300)
  rotate(hrAngle);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  fill(255);
  textSize(20);
  text("Short is Hour", 10, 20);
  text("Long is Minute", 10, 50);
  text("Medium is Second", 10, 80);
}