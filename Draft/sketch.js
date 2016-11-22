var baby, family, lighthouse, barn, windmill, egg, hatched;
var c1, c2, c3, c4, c5, c6, c7, c8, c9;
var eggbottom;
var c = 800;
var n = 510;
var count = 0;
var value = 0;

function preload() {
  baby = loadImage("pics/baby_chick.png");
  family = loadImage("pics/family_chicks.png");
  lighthouse = loadImage("pics/lighthouse.png");
  barn = loadImage("pics/barn.png");
  windmill = loadImage("pics/windmill.png");
  egg = loadImage("pics/egg.png");
  c1 = loadImage("pics/c1.png");
  c2 = loadImage("pics/c2.png");
  c3 = loadImage("pics/c3.png");
  c4 = loadImage("pics/c4.png");
  c5 = loadImage("pics/c5.png");
  c6 = loadImage("pics/c6.png");
  c7 = loadImage("pics/c7.png");
  c8 = loadImage("pics/c8.png");
  c9 = loadImage("pics/c9.png");
  eggbottom = loadImage("pics/eggbottom.png");
  hatched= loadImage("pics/hatching_chick.png");
} //end preload
function setup() {
  createCanvas(1000, 900);


} //end setup

function draw() {


  if (keyIsDown(LEFT_ARROW)) n -= 5;
  if (keyIsDown(RIGHT_ARROW)) n += 5;
  if (keyIsDown(UP_ARROW)) c -= 5;
  if (keyIsDown(DOWN_ARROW)) c += 5;

  //start of locations
  background(149, 237, 255);
  noStroke();
  fill(149, 255, 155);
  rect(0, 800, width, 100);
  fill(255, 245, 98);
  ellipse(850, 100, 150, 150);

  if (count > 950) {
    if (n > width) {
      fill(181, 145, 117);
      rect(0, 800, width, 100);
      image(barn, 50, 275);
    } //end barn
    else if (n < 0 - (baby.width)) {
      fill(255, 225, 170);
      rect(0, 800, width, 100);
      image(lighthouse, 100, 82);
    } else { //end lighthouse
      fill(149, 255, 155);
      rect(0, 800, width, 100);
      image(windmill, 550, 212);
    } //end windmill

    image(baby, n, c);
    image(family, 500, 700);
  } //end count

  //if (count <500){
  Chick();
  //}//end count


  fill(0);
  count += 1;
  textSize(50);
  text("count: " + count, 5, 100);

} //end draw

function mousePressed() {
  if ((mouseX >= 500 && mouseX < 561) && (mouseY >= 800 && mouseY < 878)) {
    value = 1;
  } //end if
} //end mousePressed
