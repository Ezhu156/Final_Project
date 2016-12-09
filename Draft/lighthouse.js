function Lighthouse() {
  this.outside = function() {
      fill(255, 225, 170);
      rect(0, 800, width, 100);
      image(lighthouse, 100, 82);
      image(arrow, 850, 720);

    } //end outside

  this.inside = function() {
      background(255);
      image(stairs, 0, 0);
    } //end inside
  this.upstairs = function() {
      background(0, g, b);
      image(light, 0, 0);
    } //end inside
} //end function