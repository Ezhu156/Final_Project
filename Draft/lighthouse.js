function Lighthouse() {
  this.outside = function() { //outside of the lighthouse
      fill(255, 225, 170);
      rect(0, 800, width, 100);
      image(lighthouse, 100, 82);
      image(arrow, 850, 720);
    } //end outside

  this.inside = function() { //inside of the lighthouse
      background(255);
      image(stairs, 0, 0);
      image(outside, 885, 15);
      if (fam_index0 === true) image(family, 300, 735);
    } //end inside

  this.upstairs = function() { //upstairs of the lighthouse
      background(0, g, b);
      image(light, 0, 0);
      image(outside, 885, 15);
      if (fam_index1 === true) image(family, 165, 750);
      //if (light_on === true) image(light_on, 0, 0);
    } //end inside
} //end function