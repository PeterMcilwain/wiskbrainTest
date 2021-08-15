var faces = [];
var brains = [];
var bCoords = [];
var img = 0;
var d, bw, bh, x, y, t = 0;

function preload() {
  for (let i = 0; i < 18; i++) {
    faces[i] = loadImage("assets/face" + i + ".png");
  }
  for (let i = 0; i < 4; i++) {
    brains[i] = loadImage("assets/brainphone" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //fullscreen(true);
  getDrawPosition();

  bCoords[0] = createVector(3, 2, 0);
  bCoords[1] = createVector(3, 3, 0);
  bCoords[2] = createVector(2, 3, 0);
  bCoords[3] = createVector(2, 3, 0);
  bCoords[4] = createVector(3, 3, 0);
  
  bCoords[5] = createVector(3, 3, 0);
  bCoords[6] = createVector(4, 1, 3);
  bCoords[7] = createVector(3, 1, 3);
  bCoords[8] = createVector(3, 1, 3);
  bCoords[9] = createVector(3, 2, 3);
  
  bCoords[10] = createVector(3, 2, 3);
  bCoords[11] = createVector(2, 3, 2);
  bCoords[12] = createVector(1, 3, 2);
  bCoords[13] = createVector(3, 3, 1);
  bCoords[14] = createVector(4, 4, 1);
  
  bCoords[15] = createVector(4, 4, 1);
  bCoords[16] = createVector(3, 2, 3);
  bCoords[17] = createVector(4, 0, 3);
}
function draw() {
  background(0);
  getSector();
  image(faces[img], x, y, d, d);
  getBrain();
  push();
  translate(x + (bCoords[img].x * bh), y + (bCoords[img].y * bh));
  rotator(bCoords[img].z, bw, bh);
  image(brains[t], 0, 0, bw, bh);
  pop();
  
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
  bw = d / 7 * 3;
  bh = d / 7;
  x = (windowWidth - d) / 2;
  y = (windowHeight - d) / 2;
}
function getSector() {
  var a = atan2(mouseY-height/2, mouseX-width/2);
  img = (int(map(a, PI, -PI, 0, 17)) + 1) % 18;
  print(img);
}
function getBrain() {
  if (frameCount % 6 == 0) {
    t ++;
    if (t > 3) {
      t = 0;
    }
  }
}
function rotator(r, w, h) {
  switch (r) {
  case 0:
    translate(0, 0);
    break;
  case 1:
    translate(h, 0);
    break;
  case 2:
    translate(w, h);
    break;
  case 3:
    translate(0, w);   
    break;
  default:
  }
  rotate(r * HALF_PI);
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
