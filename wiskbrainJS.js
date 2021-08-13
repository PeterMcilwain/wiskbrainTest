//var images = [];
//var img = 0;

//function preload() {
//  for (var i = 0; i < images.length; i++) {
//    images[i] = loadImage("assets/face" + i + ".png");
//  }
//}
var workyoubastard;

function setup() {
createCanvas(896, 896);
 workyoubastard = loadImage('assets/face0.png');
}

function draw() {
  //background(255);
  //getSector();
  //image(images[0], 0, 0);
  image(workyoubastard, 0, 0);
}

//function getSector() {
//  var a = atan2(mouseY-height/2, mouseX-width/2);
//  img = (int(map(a, PI, -PI, 0, 17)) + 1) % 18;
//}
