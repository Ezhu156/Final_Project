var baby, family, lighthouse, barn, windmill;
var c = 750;
var n = 250;


function preload() {
  baby = loadImage("pics/baby_chick.png");
  family = loadImage("pics/family_chicks.png");
  lighthouse = loadImage("pics/lighthouse.png");
  barn = loadImage("pics/barn.png");
  windmill = loadImage("pics/windmill.png");
} //end preload
function setup() {
  createCanvas(950, 900);


} //end setup

function draw() {


  if (keyIsDown(LEFT_ARROW)) n -= 5;
  if (keyIsDown(RIGHT_ARROW)) n += 5;
  if (keyIsDown(UP_ARROW)) c -= 5;
  if (keyIsDown(DOWN_ARROW)) c += 5;

  
  if (n > width) {
    background(149, 237, 255);
    noStroke();
    fill(181,145,117);
    rect(0, 800, width, 100);
    fill(255, 245, 98);
    ellipse(850, 100, 150, 150);
    image(barn, 50, 275);
  } //end barn
  else if (n < 0-(baby.width)) {
    background(149, 237, 255);
    noStroke();
    fill(255,225,170);
    rect(0, 800, width, 100);
    fill(255, 245, 98);
    ellipse(850, 100, 150, 150);
    image(lighthouse, 100, 82);
  } else { //end lighthouse
    background(149, 237, 255);
    noStroke();
    fill(149, 255, 155);
    rect(0, 800, width, 100);
    fill(255, 245, 98);
    ellipse(850, 100, 150, 150);
    image(windmill, 550, 212);
  } //end windmill


  image(baby, n, c);
  image(family, 500, 700);


} //end draw