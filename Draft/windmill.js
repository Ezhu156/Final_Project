function Windmill() {
  this.outside = function() {
      fill(149, 255, 155);
      rect(0, 800, width, 100);
      image(windmill, 550, 212);
      //animation(spin,769,418);
      image(left_arrow, 50, 720);
      //  fill(255, 100);
      // rect(698, 728, 54, 72);
    } //end outside

  this.inside = function() {
      background(255);
      image(in_wind, 0, 0);
    } //end inside
} //end function
