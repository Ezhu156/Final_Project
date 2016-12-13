var family, hatched;
var light, stairs, lighthouse, stairs_glow, lighthouse_glow; //ighthouse locations
var barn, inside, ladder, ladder_glow, barn_glow; //barn locations
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
var fam_index;
var ex_count = -250; //x location of eagle
var ey_count = 150; //y location of eagle 
var swoop; //eagle + chick
var eagle; //eagle
var ex = -50; //eagle + chick x location
var spin; //spinning of the windmill

var barn_out = true;
var barn_in = false;
var barn_up = false;
var mill_out = true;
var mill_in = false;
var light_out = true;
var light_in = false;
var light_up = false;


//STILL NEED TO WORK ON:
//INCORPORATING THE FAMILY
//INCORPORATING SOUND
//DRAW A EXIT BUTTON AND INSERT IT INTO HERE
//FIX THE SPIN ON THE WINDMILL BECAUSE IT KEEPS SHIFTING OVER WHILE IT SPINS
//FIX THE COUNT OF EVERYTHING SO IT FLOWS MORE SMOOTHLY
//FIX THE JUMP ON THE CHICK

function preload() {
  family = loadImage("pics/family_chicks.png"); //family of chickens
  lighthouse = loadImage("pics/lighthouse.png"); //lighthouse
  barn = loadImage("pics/barn.png"); //barn
  windmill = loadImage("pics/windmill.png"); //windmill
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
  eagle = loadAnimation("pics/2.png", "pics/19.png");
  swoop = loadAnimation("pics/e2.png", "pics/e19.png");
  spin=loadAnimation("pics/w1.png","pics/w8.png");
} //end preload

function setup() {
  createCanvas(1000, 900);
  bird = new Bird();
  mill = new Windmill();
  house = new Lighthouse();
  farm = new Barn();
  chick = new Chick();
  eagleIntro = new Eagle();
  fam_index = random(0, 3);
  sky = new Sky();
  console.log(fam_index);

} //end setup

function draw() {

  //sky function
  sky.sky();
  sky.sun();
  sky.ground();
  sky.clouds();
  fill(0, 100);
  rect(885, 15, 100, 50);
  //start of locations
  // if (count > 1000) {
  // if (n == a) image(arrow, 850, 720), image(left_arrow, 50, 720);
  //  }
  //barn
  if ((count >= 1000)) {
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
    else if (a < 0 - (hatched.width)) { //outside the lighthouse
      if (light_out === true) house.outside();
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
      }
      if (mill_out === true) { //outside the windmill
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
    if (count > 1000) image(hatched, n, c); //chick that moves after intro
  } //end count
  if (count < 1000) eagleIntro.show();
  if (count >= 1000) {
    bird.show();
    bird.update();
  }
  chick.thought(); //thoughtbubble of chick missing family
  chick.show(); //how the chick moves in and hatches
  count += 1;
  //textSize(50);
  //text("count: " + count, 5, 100);
} //end draw

function mousePressed() { //affects the locations
  if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 513)) {
    light_in = true;
    light_out = false;
    light_up = false;
  }
  if ((mouseX >= 0 && mouseX < 307) && (mouseY >= 513 && mouseY < 810)) {
    light_up = true;
    light_in = false;
    light_out = false
  } else if ((mouseX >= 184 && mouseX < 446) && (mouseY >= 572 && mouseY < 801)) {
    barn_in = true;
    barn_out = false;
    barn_up = false;
  } else if ((mouseX >= 814 && mouseX < 915) && (mouseY >= 145 && mouseY < 900) && barn_in === true) {
    barn_up = true;
    barn_in = false;
    barn_out = false;
  } else if ((mouseX >= 698 && mouseX < 752) && (mouseY >= 728 && mouseY < 800)) {
    mill_in = true;
    mill_out = false;
  } else if ((mouseX >= 885 && mouseX < 985) && (mouseY >= 15 && mouseY < 65)) {
    barn_out = true;
    barn_in = false;
    barn_up = false;
    mill_in = false;
    mill_out = true;
    light_out = true;
    light_in = false;
    light_up = false;

  } //end if
} //end mousePressed

function keyPressed() {
  if (keyCode == 38) {
    bird.up();
  } //end keyCode
} //end keyPressed
