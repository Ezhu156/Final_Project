function Windmill() {
  this.outside = function() {//outside the windmill
      fill(149, 255, 155);
      rect(0, 800, width, 100);
      image(windmill, 550, 212);
      //animation(spin,769,418); //this was so the windmill could spin but because the size of the image shifts depending on the rotation, the rotation doesnt quite work
      image(left_arrow, 50, 720);
    } //end outside

  this.inside = function() {//inside the windmill
      background(255);
      image(in_wind, 0, 0);
      image(outside, 885, 15);
      if (fam_index4 === true) image(family, 500, 735);
    } //end inside
} //end function