function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("#80ffdb");
  let d = day();
  let m = month();
  let y = year();

  // Translate allows us to recet the coordinate system from the top left to any point
  // Here we are making it centerd on the canvas, just like the coordinate system in math class
  translate(width / 2, height / 2);
  // Then we rotate the coordinate system to better fit how a clock works
  rotate(-90);

  // Getting the current course of the day and saving it in hr everytime draw is called
  let hr = hour();
  // Doing the same to minutes(mn) and seconds(sc)
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  // The color pallete we are using: https://coolors.co/2f6690-3a7ca5-d9dcd6-16425b-81c3d7
  stroke("#2F6690");
  noFill();

  // Map allows us to match values
  // Read more about it here: https://p5js.org/reference/#/p5/map
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke("#4ea8de");
  let minuteAngle = map(mn, 0, 60, 0, 360) + map(secondAngle, 0, 360, 0, 6);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke("#5390d9");
  let hourAngle = map(hr % 12, 0, 12, 0, 360) + map(minuteAngle, 0, 360, 0, 30);
  arc(0, 0, 260, 260, 0, hourAngle);

  // In order to rotate the line based on the specific time we have to use push() and pop()
  // These two functions isolate the roation to the code blocked between them.
  push();
  rotate(secondAngle);
  stroke("#7400b8");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#6930c3");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#5e60ce");
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(90);
  stroke(144);
  fill(144);
  strokeWeight(0.1);
  text("12", 0, -110);
  pop();

  push();
  rotate(90);
  stroke(144);
  fill(144);
  strokeWeight(0.1);
  text("3", 105, 0);
  pop();

  push();
  rotate(90);
  stroke(144);
  fill(144);
  strokeWeight(0.1);
  text(d, 90, -180);
  pop();

  push();
  rotate(90);
  stroke(144);
  fill(144);
  strokeWeight(0.1);
  text(m, 105, -180);
  pop();

  push();
  rotate(90);
  stroke(144);
  fill(144);
  strokeWeight(0.1);
  text(y, 114, -180);
  pop();

  push();
  rotate(90);
  stroke(144);
  fill(144);
  strokeWeight(0.1);
  text("9", -110, 0);
  pop();

  push();
  rotate(90);
  stroke(144);
  fill(144);
  strokeWeight(0.1);
  text("6", 0, 110);
  pop();

  push();
  rotate(90);
  stroke(144);
  fill(144);
  strokeWeight(0.1);
  text("christian_mattar_watch", -110, -180);
  pop();

  // This is the circle in the middle of the clock
  stroke(255);
  point(0, 0);
}
