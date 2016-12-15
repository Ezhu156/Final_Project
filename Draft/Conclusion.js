function Conclusion() {
  this.lighthouse = function() {
      if (fam_index0 === true) {//family is inside of the lighthouse
        fill(255);
        noStroke();
        ellipse(500, 730, 20, 20); //small circle
        ellipse(530, 707, 40, 40); //big circle
        image(cloud1, 515, 600); //thought cloud
        animation(happy, 595, 650);
      } //end index
      
      if (fam_index1 === true) {//family is upstairs in the lighthouse
        fill(255);
        noStroke();
        ellipse(360, 730, 20, 20); //small circle
        ellipse(385, 707, 40, 40); //big circle
        image(cloud1, 385, 600); //thought cloud
        animation(happy, 465, 650);
      } //end index
    } //end lighthouse

  this.barn = function() {
    if (fam_index2 === true) {//family is inside the barn
      fill(255);
      noStroke();
      ellipse(700, 730, 20, 20); //small circle
      ellipse(730, 707, 40, 40); //big circle
      image(cloud1, 715, 600); //thought cloud
      animation(happy, 795, 650);
    } //end index
    
    if (fam_index3 === true) {//family is upstair in the barn
      fill(255);
      noStroke();
      ellipse(795, 770, 20, 20); //small circle
      ellipse(820, 740, 40, 40); //big circle
      image(cloud1, 815, 625); //thought cloud
      animation(happy, 895, 675);
    } //end index
  }//end barn
  
  this.windmill = function() {
    if (fam_index4 === true) {//family is inside the windmill
      fill(255);
      noStroke();
      ellipse(700, 730, 20, 20); //small circle
      ellipse(730, 707, 40, 40); //big circle
      image(cloud1, 715, 600); //thought cloud
      animation(happy, 795, 650);
    } //end index
  }//end windmill
}//end function