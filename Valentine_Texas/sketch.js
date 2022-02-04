function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  strokeWeight(5);
  stroke(255,0,0);
  frameRate(8);

  let shape = random([rect, square, ellipse]);

  for (var x = 0; x <= width; x = x + 30) {
    fill(244, 0, 200);
    shape(x, 100, 8, 30);
  }

  for (var x = 0; x <= width; x = x + 30) {
    fill(244, 0, 200);
    shape(x, 200, 8,30);
  }

  for (var x = 0; x <= width; x = x + 30) {
    fill(244, 0, 200);
    shape(x, 300, 8, 30);
  }
}