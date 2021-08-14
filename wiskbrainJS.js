var images = [];
var img = 0;
var d, x, y;

function preload() {
  for (var i = 0; i < 18; i++) {
    images[i] = loadImage("assets/face" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fullscreen(true);
  getDrawPosition();
}
function draw() {
  background(255);
  getSector();
  image(images[img], x, y, d, d);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  getDrawPosition();
}
function getDrawPosition() {
  if (windowWidth > windowHeight) {
    d = windowHeight;
  } else {
    d = windowWidth;
  }
  x = (windowWidth - d) / 2;
  y = (windowHeight - d) / 2;
}
function getSector() {
  var a = atan2(mouseY-height/2, mouseX-width/2);
  img = (int(map(a, PI, -PI, 0, 17)) + 1) % 18;
}
function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
document.ontouchmove = function(event) {
    event.preventDefault();
};
