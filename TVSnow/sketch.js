let img = ["smallwork.png"];
//Digital image of woman in bed, included to represent exhaustion. My own image.
let words = ["work", "play", "claw", "play"];
//Words derived from "Noise Poem" created by listening to the radio. I chose three action verbs--work, play, claw.
let noiseScale = 0.1;
//Increased noise scale creates sharp, wave-like appearance.

function setup() {
  createCanvas(400, 400);
  img = loadImage("smallwork.png");
  frameRate(30);
}

function draw() {
  background(0);
  strokeWeight(1);
  //When the mouse is pressed, the image of the exhausted woman appears above the words "work, play, claw." The image appears center and mimics a TV screen or video game. The triangle represents a play button below the words.
  if (mouseIsPressed === true) {
    noStroke();
    //Noise appears in the background to represent "background noise," a phenomena commonly referred to as "noise pollution."
    for (let x = 0; x < width; x++) {
      let noiseVal = noise((mouseX + x) * noiseScale, mouseX * noiseScale);
      //Noise increases as the mouse moves across the screen.
      stroke(noiseVal * 90);
      line(x, mouseX + noiseVal * 90, x, height);
    }
    text(random(words), 190, 350);
    fill(255);
    triangle(205, 361, 198, 358, 198, 365);
    frameRate(8);
    image(img, 73, 100);
    //The default screen displays "work, play, claw" in front of TV static. The words are arranged to represent a "no signal" bar on the screen. The static in the background concentrates at the top and begins to dissipate toward the bottom of the canvas.
  } else {
    //Each body of text appears in uniform size and font.
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
    //I created a gradiant for the static in incriments of 50.
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
