//"Noise poem" words come from a list of words/phrases I constructed after radio surfing for 20 minutes. I included a picture in my submission.
let words = ["work", "play", "claw", "play"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Increased frame rate to create the appearance of snow flurries/ TV static.
  frameRate(30);
}

function draw() {
  //Black background to mimic a TV.
  background(0);

  //Words appear in a single row like a white "no signal" bar on a TV.
  if (mouseIsPressed === true) {
    text(random(words), 332, 390);
    triangle(350, 410, 340, 405, 340, 415);
    frameRate(8);
    //If mouse is pressed, TV static disappears and the words appear at the bottom near a play button to mimic a game.
  } else {
    frameRate(50);
    text(random(words), 100, 10);
    fill(255);
    textFont("times new roman");

    text(random(words), 100, 100);
    fill(255);
    textFont("times new roman");

    text(random(words), 100, 200);
    fill(255);
    textFont("times new roman");

    text(random(words), 100, 300);
    fill(255);
    textFont("times new roman");

    text(random(words), 100, 400);
    fill(255);
    textFont("times new roman");

    text(random(words), 100, 500);
    fill(255);
    textFont("times new roman");

    text(random(words), 100, 600);
    fill(255);
    textFont("times new roman");

    //White noise appears against the black background in an ombre that concentrates at the top and becomes lighter toward the bottom.
    for (var x = 0; x <= width; x++) {
      stroke(255);
      point(x, random(height));
      point(x, random(50));
      point(x, random(100));
      point(x, random(150));
      point(x, random(200));
      point(x, random(250));
      point(x, random(300));
      point(x, random(350));
      point(x, random(400));
    }
  }
}
