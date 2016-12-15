function Barn() {
  this.outside = function() {//outside the barn
    fill(181, 145, 117);
    rect(0, 800, width, 100);
    image(barn, 50, 275);
    image(arrow, 850, 720);
    image(left_arrow, 50, 720);
  }//end outside
  
  this.inside = function() {//inside of the barn
      background(255);
      image(inside, 0, 0);
      image(outside, 885, 15);
      if (fam_index2 === true) image(family, 500, 735);
    } //end inside
    
  this.upper = function() {//upstairs of the barn
      background(255);
      image(ladder, 0, 0);
      image(outside, 885, 15);
      if (fam_index3 === true) image(family, 600, 775);
    } //end upstairs
} //end function