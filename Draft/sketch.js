var baby, family, egg, hatched, eggbottom;
var c1, c2, c3, c4, c5, c6, c7, c8, c9; //egg hatching
var light, stairs, lighthouse, stairs_glow, lighthouse_glow; //ighthouse locations
var barn, inside, ladder, ladder_glow, barn_glow, barn_exit; //barn locations
var windmill, in_wind, windmill_glow; //windmill locations
var cloud1, cloud2; //cloud types
var c = 810; //y location of chick
var n = 500; //x location of chick
var a = 500; //duplicate of x location
var count = 0; //time
var fam = [-250, 1500, 2500]; //possible locations of the family
var s = 950 //y location of the sun
var t = 850 //x location of the sun
var b = 50; //blue value for the background
var g = 0; //green value for the background
var d = 0; //x location of the clouds
var e = 100; //y location of the clouds
var bird;
var arrow, leftarrow; //arrow that shows which way the chick can go


var barn_out = true;
var barn_in = false;
var barn_up = false;
var mill_out = false;
var mill_in = false;
var light_out = false;
var light_in = false;
var light_up = false;
var start = false;

//STILL NEED TO WORK ON:
//ADJUSTING THE LOCATIONS + HOW MOUSE PRESSED AFFECTS THEM- USE TRUE/FALSE
//INCORPORATING THE FAMILY
//FINDING WAYS TO MAKE IT SO THE CHICK KNOWS IT IS MISSING ITS FAMILY
//MAKING THE EGG ROLL IN (ROTATION)
//INCORPORATING SOUND
//ADD A BACK BUTTON TO RETURN TO PREVIOUS PARTS IN CERTAIN LOCATION
//MAKE THE WINDMILL SPIN SLOWLY

function preload() {
  baby = loadImage("pics/baby_chick.png"); //chick
  family = loadImage("pics/family_chicks.png"); //family of chickens
  lighthouse = loadImage("pics/lighthouse.png"); //lighthouse
  barn = loadImage("pics/barn.png"); //barn
  windmill = loadImage("pics/windmill.png"); //windmill
  egg = loadImage("pics/egg.png"); //egg
  c1 = loadImage("pics/c1.png");
  c2 = loadImage("pics/c2.png");
  c3 = loadImage("pics/c3.png");
  c4 = loadImage("pics/c4.png");
  c5 = loadImage("pics/c5.png");
  c6 = loadImage("pics/c6.png");
  c7 = loadImage("pics/c7.png");
  c8 = loadImage("pics/c8.png");
  c9 = loadImage("pics/c9.png");
  eggbottom = loadImage("pics/eggbottom.png"); //bottom half of the egg
  hatched = loadImage("pics/hatching_chick.png"); //chick out of the shell
  light = loadImage("pics/light.png"); //top of the lighthouse
  stairs = loadImage("pics/stairs.png"); //stairs in the lighthouse
  inside = loadImage("pics/inside_barn.png"); //bottom level of the barn
  ladder = loadImage("pics/ladder.png"); //top level of the barn
  in_wind = loadImage("pics/in_wind.png"); //inside of windmill
  cloud1 = loadImage("pics/cloud1.png") //cloud1
  cloud2 = loadImage("pics/cloud2.png") //cloud2
  arrow = loadImage("pics/arrow.png");
  left_arrow = loadImage("pics/left_arrow.png");
  barn_glow = loadImage("pics/barn_glow.png");
  ladder_glow = loadImage("pics/ladder_glow.png");
  windmill_glow = loadImage("pics/windmill_glow.png");
  stairs_glow = loadImage("pics/stairs_glow.png");
  lighthouse_glow = loadImage("pics/lighthouse_glow.png");
  barn_exit = loadImage("pics/barn_exit.png");
} //end preload
function setup() {
  createCanvas(1000, 900);
  bird = new Bird();
  mill = new Windmill();
  house = new Lighthouse();
  farm = new Barn();


} //end setup

function draw() {

  //start of locations

  Sky();
  if (n == a) image(arrow, 850, 720), image(left_arrow, 50, 720);

  //barn
  if ((count > 850) && (start === true)) {
    if (keyIsDown(LEFT_ARROW)) { //movement of the chick to the left
      n -= 5;
      a -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) { //movement of the chick to the right
      n += 5;
      a += 5;
    }
    if (a > width && a < (width * 2)) {
      n = a - width;
      if (barn_out === true) {
        farm.outside();
      }
      if ((mouseX >= 184 && mouseX < 446) && (mouseY >= 572 && mouseY < 801)) image(barn_glow, 168, 556);
      if (barn_in === true) { //bottom level of the barn
        farm.inside();
        //fill(255,100);
        //rect(163,506,100,289);
        //if ((mouseX >= 163 && mouseX < 263) && (mouseY >= 506 && mouseY < 795)) image(barn_exit, 147, 490);
        if ((mouseX >= 814 && mouseX < 915) && (mouseY >= 145 && mouseY < 900)) image(ladder_glow, 800, 130);
      } else if (barn_up === true) { //top level of the barn
        farm.upper();
      }
    } //end barn

    //lighthouse
    else if (a < 0 - (baby.width)) { //outside the lighthouse
      house.outside();
      if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 513)) image(lighthouse_glow, 84, 67);
      n = width + a;
      if (light_in === true) { //stairs in the lighthouse
        house.inside();
        if ((mouseX >= 0 && mouseX < 307) && (mouseY >= 513 && mouseY < 810)) image(stairs_glow, -14, -15);
      } else if (light_up === true) { //top of the lighthouse
        house.upstairs();
      } //end value 2
    } //end lighthouse

    //windmill
    else if (a > width * 2) {
      n = a - (2 * width);
      if (mill_in === true) { //inside the windmill
        mill.inside();
      } else { //outside the windmill
        mill.outside();
        if ((mouseX >= 698 && mouseX < 752) && (mouseY >= 728 && mouseY < 800)) image(windmill_glow, 683, 713);
      } //end else
    } //end windmill
    //start location (where the egg comes in and hatches)
    else {
      fill(149, 255, 155);
      rect(0, 800, width, 100);
      image(arrow, 850, 720);
      image(left_arrow, 50, 720);
      n = a;
    } //end start location

    //image(hatched, n, c); //image of the chick
    bird.update();
    bird.show();

    // image(family, 500, 700);
  } //end count


  Chick(); //how the chick moves in and hatches

  //fill(0);
  count += 1;
  //textSize(50);
  //text("count: " + count, 5, 100);
} //end draw

function mousePressed() { //affects the locations
  if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 513)) {
    light_in = true;
  }
  if ((mouseX >= 0 && mouseX < 307) && (mouseY >= 513 && mouseY < 810)) {
    light_up = true;
    light_in = false;
  } else if ((mouseX >= 184 && mouseX < 446) && (mouseY >= 572 && mouseY < 801)) {
    barn_in = true;
    barn_out = false;
 /* } else if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 513)) {
    barn_in = false;
    barn_out = true;*/
  } else if ((mouseX >= 814 && mouseX < 915) && (mouseY >= 145 && mouseY < 900) && barn_in === true) {
    barn_up = true;
    barn_in = false;
    barn_out = false;
  } else if ((mouseX >= 698 && mouseX < 752) && (mouseY >= 728 && mouseY < 800)) {
    mill_in = true;
  } //end if
} //end mousePressed

function keyPressed() {
  if (keyCode == 38) {
    bird.up();
    start = true;
  }
}
