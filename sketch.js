function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  let hr_end = map(hr%12, 0, 12, 0, 360);
  let mn_end = map(mn, 0, 59, 0, 360);
  let sc_end = map(sc, 0, 59, 0, 360);

  noFill();
  strokeWeight(10);
  stroke(255, 100, 150);
  arc(0, 0, 435, 435, 0, sc_end);

  noFill();
  strokeWeight(10);
  stroke(100, 255, 150);
  arc(0, 0, 412, 412, 0, mn_end);

  noFill();
  strokeWeight(10);
  stroke(150, 100, 255);
  arc(0, 0, 390, 390, 0, hr_end);

  push();
  rotate(sc_end);
  strokeWeight(2);
  stroke(255, 100, 150);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(mn_end);
  strokeWeight(3);
  stroke(100, 255, 150);
  line(0, 0, 130, 0);
  pop()

  push();
  rotate(hr_end);
  strokeWeight(7);
  stroke(150, 100, 255);
  line(0, 0, 70, 0);
  pop();

  fill(255);
  noStroke();
  ellipse(0,0,10,10);
  fill(0);
  ellipse(0,0,5,5);
  noFill();
  strokeWeight(7);
  stroke(100,100,100);
  ellipse(0,0,454,454);

  rotate(90);
  fill(255);
  textSize(30);
  noStroke();
  text(hr % 12+':'+mn+':'+sc, -30, -250);
}
