function Chick() {
  var x = -5;//x-value for egg
  var y = 800;//y-value for egg
  var j= 500; //x-value for chick
  var k= 810;//y-value for chick

  if (count < 500) image(egg, count, y);
  if (500 <= count && count <= 525) image(c1, 500, y);
  if (525 <= count && count <= 550) image(c2, 500, y);
  if (550 <= count && count <= 575) image(c3, 500, y);
  if (575 <= count && count <= 600) image(c4, 500, y);
  if (600 <= count && count <= 625) image(c5, 500, y);
  if (625 <= count && count <= 650) image(c6, 500, y);
  if (650 <= count && count <= 675) image(c7, 500, y);
  if (675 <= count && count <= 700) image(c8, 500, y);
  if (700 <= count && count <= 800) image(c9, 500, y);

  //fill(0, 100);
  //stroke(255);
  //rect(500, 800, 61, 78);
  if (count >= 800 && count <= 950) {
    //if (value == 1) {
    image(hatched, j, k);
    image(eggbottom, 500, 830);
    //  } else {
    //  if (700 <= count) image(c9, 500, y);
    //  } //end value
  } //end count
  
  
  
} //end function

//draw egg and basically make it stop motion of it cracking and the chick appearing
//animation of chick being surprised and sad that family is gone
//make game controlled by arrow keys and mouse or just by the mouse