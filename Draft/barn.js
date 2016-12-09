function Barn() {
  this.outside = function() {
    fill(181, 145, 117);
    rect(0, 800, width, 100);
    image(barn, 50, 275);
    image(arrow, 850, 720);
    image(left_arrow, 50, 720);
  }
  this.inside = function() {
      background(255);
      image(inside, 0, 0);
    } //end outside
  this.upper = function() {
      background(255);
      image(ladder, 0, 0);
    } //end inside
} //end function