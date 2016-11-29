var baby, family, barn, windmill, egg, hatched;
var c1, c2, c3, c4, c5, c6, c7, c8, c9;
var light, stairs, lighthouse; //ighthouse locations
var eggbottom;
var c = 810; //y location of chick
var n = 500; //x location of chick
var a = 500; //duplicate of x location
var count = 0; //time
var value = 0; //mouse pressed
var fam = [-250, 1500, 2500]; //possible locations of the family
var s = 950 //y location of the sun
var t = 850 //x location of the sun
var b = 50; //blue value for the background
var g = 0; //green value for the background


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
  hatched = loadImage("pics/hatching_chick.png");
  light = loadImage("pics/light.png");
  stairs = loadImage("pics/stairs.png");
} //end preload
function setup() {
  createCanvas(1000, 900);


} //end setup

function draw() {


  if (keyIsDown(LEFT_ARROW)) {
    n -= 5;
    a -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    n += 5;
    a += 5;
  }

  //start of locations

  //sky color
  background(0, g, b);
  if (count < 10000) b += .05, g += .025;
  else b -= .1, g -= .05;
  //location of the sun
  if (count <= 8000) s -= .1;
  if (count > 8000 && count <= 9500) s -= .1, t -= .2;
  if (count > 9500 && count <= 12000) s += .1, t -= .2;
  if (count > 12000 && count <= 19000) s += .1;
  //sun
  fill(255, 245, 98);
  ellipse(t, s, 150, 150);
  //ground
  noStroke();
  fill(149, 255, 155);
  rect(0, 800, width, 100);

  //barn
  if (count > 950) {
    if (a > width && a < (width * 2)) {
      fill(181, 145, 117);
      rect(0, 800, width, 100);
      image(barn, 50, 275);
      n = a - width;
    } //end barn

    //lighthouse
    else if (a < 0 - (baby.width)) {
      fill(255, 225, 170);
      rect(0, 800, width, 100);
      image(lighthouse, 100, 82);
      n = width + a;
      fill(0, 100);
      rect(100, 82, 192, 719);
      if (value == 1) {
        background(255);
        image(stairs, 0, 0);
      } else if (value == 2) {
        background(0, g, b);
        image(light, 0, 0);
      } //end value 2
    } //end lighthouse

    //windmill
    else if (a > width * 2) {
      fill(149, 255, 155);
      rect(0, 800, width, 100);
      image(windmill, 550, 212);
      n = a - (2 * width);
    } //end windmill
    //start location
    else {
      fill(149, 255, 155);
      rect(0, 800, width, 100);
      n = a;
    } //end start location

    image(hatched, n, c);


    // image(family, 500, 700);
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
  if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 801)) {
    value = 1;
  } else if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 801)) {
    value = 2;
  } //end if
} //end mousePressed
