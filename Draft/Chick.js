function Chick() {

  this.show = function() { //family and their expression after the eagle takes the chick
      if (count < 570) image(family, 325, 735); //the family in the intro
      if (count > 540 && count < 570) { //expression of the Family after chick taken away
        noStroke();
        fill(255); //color of the cloud
        ellipse(525, 725, 20, 20); //small circle
        image(cloud1, 530, 650, cloud1.width / 2, cloud1.height / 1.5); //thought cloud
        fill(0); //color for exclamation point
        quad(560, 662, 565, 695, 575, 695, 580, 662); //top of exclamation point
        ellipse(571, 708, 15, 15); //bottom of exclamation point
      } //end count

    } //end show
    //thought bubble
  this.thought = function() {//thought bubble for the chick after it falls from the sky
      noStroke();
      fill(255);
      if (920 <= count && count <= 1000) ellipse(560, 790, 20, 20); //small circle
      if (930 <= count && count <= 1000) ellipse(585, 755, 40, 40); //big circle
      if (940 <= count && count <= 1000) image(cloud1, 600, 640); //thought cloud
      if (945 <= count && count <= 1000) image(family, 625, 660, family.width / 2, family.height / 2); //the family in the intro
    } //end thought

} //end function