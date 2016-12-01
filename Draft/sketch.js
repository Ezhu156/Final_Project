var baby, family, egg, hatched, eggbottom;
var c1, c2, c3, c4, c5, c6, c7, c8, c9;//egg hatching
var light, stairs, lighthouse; //ighthouse locations
var barn, inside, ladder; //barn locations
var windmill, in_wind; //windmill locations
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

//STILL NEED TO WORK ON:
//ADJUSTING THE LOCATIONS + HOW MOUSE PRESSED AFFECTS THEM
//INCORPORATING THE FAMILY
//FINDING WAYS TO MAKE IT SO THE CHICK KNOWS IT IS MISSING ITS FAMILY
//MAKING THE EGG ROLL IN (ROTATION)
//INCORPORATING SOUND
//MAKE THE CHICK HOP WHEN THE UP ARROW IS PRESSED

function preload() {
  baby = loadImage("pics/baby_chick.png");//chick
  family = loadImage("pics/family_chicks.png");//family of chickens
  lighthouse = loadImage("pics/lighthouse.png");//lighthouse
  barn = loadImage("pics/barn.png");//barn
  windmill = loadImage("pics/windmill.png");//windmill
  egg = loadImage("pics/egg.png");//egg
  c1 = loadImage("pics/c1.png");
  c2 = loadImage("pics/c2.png");
  c3 = loadImage("pics/c3.png");
  c4 = loadImage("pics/c4.png");
  c5 = loadImage("pics/c5.png");
  c6 = loadImage("pics/c6.png");
  c7 = loadImage("pics/c7.png");
  c8 = loadImage("pics/c8.png");
  c9 = loadImage("pics/c9.png");
  eggbottom = loadImage("pics/eggbottom.png");//bottom half of the egg
  hatched = loadImage("pics/hatching_chick.png");//chick out of the shell
  light = loadImage("pics/light.png");//top of the lighthouse
  stairs = loadImage("pics/stairs.png");//stairs in the lighthouse
  inside = loadImage("pics/inside_barn.png");//bottom level of the barn
  ladder = loadImage("pics/ladder.png");//top level of the barn
  in_wind = loadImage("pics/in_wind.png");//inside of windmill
} //end preload
function setup() {
  createCanvas(1000, 900);


} //end setup

function draw() {


  if (keyIsDown(LEFT_ARROW)) { //movement of the chick to the left
    n -= 5;
    a -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) { //movement of the chick to the right
    n += 5;
    a += 5;
  }

  //start of locations

  //sky color
  background(0, g, b); //sky
  if (count < 10000) b += .05, g += .025; //sky
  else b -= .1, g -= .05; //sky
  //location of the sun
  if (count <= 8000) s -= .1; //sun rise
  if (count > 8000 && count <= 9500) s -= .1, t -= .2; //sun moving towards center
  if (count > 9500 && count <= 12000) s += .1, t -= .2;//sun moving towards left
  if (count > 12000 && count <= 19000) s += .1; //sunset
  //sun
  fill(255, 245, 98); //color of the sun (MAKE THE SUN CHANGE COLORS CORRESPONDING TO TIME OF DAY)
  ellipse(t, s, 150, 150);//size of the sun
  //ground
  noStroke(); 
  fill(149, 255, 155); //color of the ground
  rect(0, 800, width, 100); //size of the ground

  //barn
  if (count > 950) {
    if (a > width && a < (width * 2)) {
      n = a - width;
      fill(181, 145, 117);
      rect(0, 800, width, 100);
      image(barn, 50, 275);

      if (value == 3) { //bottom level of the barn
        background(255);
        image(inside, 0, 0);
      } else if (value == 4) { //top level of the barn
        background(255);
        image(ladder, 0, 0);
      }
    } //end barn

    //lighthouse
    else if (a < 0 - (baby.width)) { //outside the lighthouse
      fill(255, 225, 170);
      rect(0, 800, width, 100);
      image(lighthouse, 100, 82);
      n = width + a;
      if (value == 1) { //stairs in the lighthouse
        background(255);
        image(stairs, 0, 0);
      } else if (value == 2) { //top of the lighthouse
        background(0, g, b);
        image(light, 0, 0);
      } //end value 2
    } //end lighthouse

    //windmill
    else if (a > width * 2) {
      n = a - (2 * width);
      if (value == 5) {//inside the windmill
        background(255);
        image(in_wind, 0, 0);
      } else { //outside the windmill
        fill(149, 255, 155);
        rect(0, 800, width, 100);
        image(windmill, 550, 212);
        fill(255, 100);
        rect(698, 728, 54, 72);
      } //end if
    } //end windmill
   
    //start location (where the egg comes in and hatches)
    else {
      fill(149, 255, 155);
      rect(0, 800, width, 100);
      n = a;
    } //end start location

    image(hatched, n, c); //image of the chick


    // image(family, 500, 700);
  } //end count

  //if (count <500){
  Chick(); //how the chick moves in and hatches
  //}//end count


  //fill(0);
  count += 1;
  //textSize(50);
  //text("count: " + count, 5, 100);
} //end draw

function mousePressed() { //affects the locations
  if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 801)) {
    value = 1;
  } else if ((mouseX >= 0 && mouseX < 307) && (mouseY >= 413 && mouseY < 810) && (value == 1)) {
    value = 2;
  } else if ((mouseX >= 184 && mouseX < 446) && (mouseY >= 572 && mouseY < 801)) {
    value = 3;
  } else if ((mouseX >= 814 && mouseX < 915) && (mouseY >= 145 && mouseY < 900) && (value == 3)) {
    value = 4;
  } else if ((mouseX >= 698 && mouseX < 752) && (mouseY >= 728 && mouseY < 800)) {
    value = 5;
  } //end if
} //end mousePressed
