var images = [];
var img = 0;
var workyoubastard;

function preload() {
  
  for (var i = 0; i < 18; i++) {
    images[i] = loadImage("assets/face" + i + ".png");
  }

}


function setup() {
createCanvas(896, 896);

}

function draw() {
  background(255);
  getSector();
  image(images[img], 0, 0);

}

function getSector() {
  var a = atan2(mouseY-height/2, mouseX-width/2);
  img = (int(map(a, PI, -PI, 0, 17)) + 1) % 18;
}
