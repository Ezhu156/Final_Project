var family, hatched; //family of chicks and the baby chick
var light, stairs, lighthouse, stairs_glow, lighthouse_glow; //lighthouse locations
var barn, inside, ladder, ladder_glow, barn_glow; //barn locations
var windmill, in_wind, windmill_glow; //windmill locations
var cloud1, cloud2; //cloud types
var c = 810; //y location of chick
var n = 500; //x location of chick
var a = 500; //duplicate of x location
var count = 0; //time
var s;//y location of the sun
var t;//x location of the sun
var b = 50; //blue value for the background
var g = 0; //green value for the background
var d = 0; //x location of the clouds
var e = 100; //y location of the clouds
var bird; //class for the chick flying
var arrow; //arrow that shows which way the chick can go
var leftarrow; //arrow that shows which way the chick can go
var fam_index; //how the family ends up in a random location
var ex_count = -250; //x location of eagle
var ey_count = 150; //y location of eagle 
var swoop; //eagle + chick
var eagle; //eagle
var ex = -50; //eagle + chick x location
var spin; //spinning of the windmill
var outside, exit_glow; //exit sign
var ending; //end sequence of the narration
var happy; //ending animation
var flower; //flower font
var mill;//for windmill class
var farm;//for barn class
var chick;//for chick class
var house;//for lighthout class
var eagleIntro;//for eagle class
var sky;//for sky class
var ending; //for ending class

var barn_out = true;
var barn_in = false;
var barn_up = false;
var mill_out = true;
var mill_in = false;
var light_out = true;
var light_in = false;
var light_up = false;
var light_on = false;

//indexes for the location of the family
var fam_index0 = false;
var fam_index1 = false;
var fam_index2 = false;
var fam_index3 = false;
var fam_index4 = false;

var start_game = false; //button to press to begin the game
var help = false; //control page for the game
var controls; //controls for the game
var back_control = false; //back button for control page


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
  cloud1 = loadImage("pics/cloud1.png"); //cloud1
  cloud2 = loadImage("pics/cloud2.png"); //cloud2
  arrow = loadImage("pics/arrow.png");
  left_arrow = loadImage("pics/left_arrow.png");
  barn_glow = loadImage("pics/barn_glow.png");
  ladder_glow = loadImage("pics/ladder_glow.png");
  windmill_glow = loadImage("pics/windmill_glow.png");
  stairs_glow = loadImage("pics/stairs_glow.png");
  lighthouse_glow = loadImage("pics/lighthouse_glow.png");
  eagle = loadAnimation("pics/2.png", "pics/19.png");
  swoop = loadAnimation("pics/e2.png", "pics/e19.png");
  spin = loadAnimation("pics/w1.png", "pics/w8.png");
  outside = loadImage("pics/exit.png");
  exit_glow = loadImage("pics/exit_glow.png");
  happy = loadAnimation("pics/end1.png", "pics/end6.png");
  flower = loadFont("pics/IndieFlower.ttf");
  light_on = loadImage("pics/light_on.png");
  controls = loadImage("pics/controls.png");
} //end preload

function setup() {
  createCanvas(1000, 900);
  bird = new Bird();
  mill = new Windmill();
  house = new Lighthouse();
  farm = new Barn();
  chick = new Chick();
  eagleIntro = new Eagle();
  fam_index = random(0, 5);
  sky = new Sky();
  ending = new Conclusion();
  console.log(fam_index);
  s = 950; //y location of the sun
  t = 850; //x location of the sun
} //end setup


function draw() {
  //sky function
  noStroke();
  sky.sky();
  sky.sun();
  sky.ground();
  sky.clouds();


  //start of locations
  stroke(0);
  strokeWeight(.5);
  fill(255); //color of the congrats text
  textFont(flower, 200);
  //barn
  if ((count >= 1000) && (start_game === true)) {
    if (keyIsDown(LEFT_ARROW)) { //movement of the chick to the left
      n -= 5;
      a -= 5;
    } //left arrow
    if (keyIsDown(RIGHT_ARROW)) { //movement of the chick to the right
      n += 5;
      a += 5;
    } //right arrow
    if (a > width && a < (width * 2)) {
      n = a - width;
      if (barn_out === true) farm.outside(); //outside of the farm
      if ((((mouseX >= 184 && mouseX < 446)) && (mouseY >= 572 && mouseY < 801))) image(barn_glow, 168, 556); //if mouse is over the doors then the door will glow
      if (barn_in === true) { //bottom level of the barn
        farm.inside();
        if (fam_index2 === true) text("Congrats!", 150, 300), ending.barn(); //if family is there then the text will show up along with the family
        if ((mouseX >= 885 && mouseX < 985) && (mouseY >= 15 && mouseY < 52)) image(exit_glow, 870, 0); //if the mouse is over the exit button, then it will glow
        if ((mouseX >= 814 && mouseX < 915) && (mouseY >= 145 && mouseY < 900)) image(ladder_glow, 800, 130); //if mouse is over the ladder, the ladder will glow
      } else if (barn_up === true) { //top level of the barn
        farm.upper();
        if (fam_index3 === true) text("Congrats!", 150, 300), ending.barn(); //if family is there then the text will show up along with the family
        if ((mouseX >= 885 && mouseX < 985) && (mouseY >= 15 && mouseY < 52)) image(exit_glow, 870, 0); //if mouse is over the exit button, then it will glow
      } //end barn_up
    } //end barn

    //lighthouse
    else if (a < 0 - (hatched.width)) { //outside the lighthouse
      if (light_out === true) house.outside();
      if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 513)) image(lighthouse_glow, 84, 67); //if mouse is over a certain area of the lighthouse then it will glow
      n = width + a;
      if (light_in === true) { //stairs in the lighthouse
        house.inside();
        if ((mouseX >= 0 && mouseX < 307) && (mouseY >= 513 && mouseY < 810)) image(stairs_glow, -14, -15); //if mouse is over the stairs, then they will glow
        if ((mouseX >= 885 && mouseX < 985) && (mouseY >= 15 && mouseY < 52)) image(exit_glow, 870, 0); //if mouse is over the exit button, then it will glow
        if (fam_index0 === true) text("Congrats!", 150, 300), ending.lighthouse(); //if family is there then the text will show up along with the family
      } else if (light_up === true) { //top of the lighthouse
        house.upstairs();
        if (fam_index1 === true) text("Congrats!", 150, 300), ending.lighthouse(); //if family is there then the text will show up along with the family
      } //end value 2
    } //end lighthouse

    //windmill
    else if (a > width * 2) {
      n = a - (2 * width);
      if (mill_in === true) { //inside the windmill
        mill.inside();
        if ((mouseX >= 885 && mouseX < 985) && (mouseY >= 15 && mouseY < 52)) image(exit_glow, 870, 0); //if the mouse is over the exit button, then it will glow
        if (fam_index4 === true) text("Congrats!", 150, 300), ending.windmill(); //if family is there then the text will show up along with the family
      } //end mill_in true
      if (mill_out === true) { //outside the windmill
        mill.outside();
        if ((mouseX >= 698 && mouseX < 752) && (mouseY >= 728 && mouseY < 800)) image(windmill_glow, 683, 713); // if mouse is over the windmill, then it will glow
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

  } //end count for locations
  if (count < 1000) eagleIntro.show(); //the eagle flying in and out 
  //how the bird falls from the eagle and how the bird is able to jump/fly
  if (count >= 1000) {
    bird.show();
    if (start_game === true) bird.update();
  } //end count bird


  chick.thought(); //thought bubble of chick missing family
  chick.show(); //chick

  if (count >= 1000) {
    if (start_game === false && help === false) {
      noStroke();
      textSize(200);
      fill(255);
      text("CHICKEN", 175, 400);
      fill(214, 208, 255);
      rect(230, 450, 250, 75);
      rect(530, 450, 250, 75);
      fill(255);
      textSize(50);
      text("START", 275, 502);
      text("CONTROLS", 540, 502);
    } //end start game
    if (help === true && back_control === false) {
      strokeWeight(1);
      stroke(255);
      noFill();
      rect(375, 575, 250, 75);
      fill(255);
      textSize(50);
      image(controls, 200, 200);
      text("JUMP/FLY", 275, 245);
      text("MOVE LEFT", 275, 345);
      text("MOVE RIGHT", 275, 445);
      text("MOUSE", 275, 525);
      text("START", 425, 630);
    } //end help
  } //end count

  count += 1;
  //textSize(50);
  //text("count: " + count, 5, 100);

  //this is how the family ends up in a random location each time the program runs
  if (fam_index >= 0 && fam_index < 1) fam_index0 = true; //index for inside the lighthouse
  if (fam_index >= 1 && fam_index < 2) fam_index1 = true; //index for the upstairs of the lighthouse
  if (fam_index >= 2 && fam_index < 3) fam_index2 = true; //index for the inside of the barn
  if (fam_index >= 3 && fam_index < 4) fam_index3 = true; //index for the upstairs of the barn
  if (fam_index >= 4 && fam_index < 5) fam_index4 = true; //index for inside the windmill


} //end draw

function mousePressed() { //affects the locations
  if ((mouseX >= 100 && mouseX < 292) && (mouseY >= 82 && mouseY < 513)) { //if the lighthouse is pressed then the location will change
    light_in = true;
    light_out = false;
    light_up = false;
  } else if ((mouseX >= 0 && mouseX < 307) && (mouseY >= 513 && mouseY < 810)) { //if the stairs are pressed then location will change
    light_up = true;
    light_in = false;
    light_out = false;
    light_on = true;
  } else if ((mouseX >= 184 && mouseX < 446) && (mouseY >= 572 && mouseY < 801)) { //if the barn doors are pressed then location will change
    barn_in = true;
    barn_out = false;
    barn_up = false;
  } else if ((mouseX >= 814 && mouseX < 915) && (mouseY >= 145 && mouseY < 900) && barn_in === true) { //if the ladder is pressed then location will change
    barn_up = true;
    barn_in = false;
    barn_out = false;
  } else if ((mouseX >= 698 && mouseX < 752) && (mouseY >= 728 && mouseY < 800)) { //if the door of the mill is pressed then location will change
    mill_in = true;
    mill_out = false;
  } else if ((mouseX >= 885 && mouseX < 985) && (mouseY >= 15 && mouseY < 52)) { //if the back button is pressed, all the locations will be reset to the default 
    barn_out = true;
    barn_in = false;
    barn_up = false;
    mill_in = false;
    mill_out = true;
    light_out = true;
    light_in = false;
    light_up = false;
  } else if ((mouseX >= 230 && mouseX < 580) && (mouseY >= 450 && mouseY < 525)) {
    start_game = true;
    help = false;
  } else if ((mouseX >= 530 && mouseX < 780) && (mouseY >= 450 && mouseY < 525)) {
    help = true;
  } else if ((mouseX >= 375 && mouseX < 625) && (mouseY >= 575 && mouseY < 650)) {
    back_control = true;
    start_game = true;
  } //end if
} //end mousePressed

function keyPressed() {
  if (keyCode == 38) {
    bird.up();
  } //end keyCode
} //end keyPressed