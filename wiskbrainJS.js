var images = [];
var img = 0;
var d, x, y;

function preload() {
  for (var i = 0; i < 18; i++) {
    images[i] = loadImage("assets/face" + i + ".png");
  }
}

function setup() {
  fullscreen();
  if (windowWidth > windowHeight) {
    d = windowHeight;
  } else {
    d = windowWidth;
  }

  createCanvas(windowWidth, windowHeight);
  x = (windowWidth - d) / 2;
  y = (windowHeight - d) / 2;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  getSector();
  image(images[img], x, y, d, d);
}

function getSector() {
  var a = atan2(mouseY-height/2, mouseX-width/2);
  img = (int(map(a, PI, -PI, 0, 17)) + 1) % 18;
}
