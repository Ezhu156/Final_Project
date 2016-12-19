function Sky() {
  this.sky = function() {
      //sky color
      background(0, g, b); //sky
      if (count < 4000) b += .1, g += .05; //sunrise
      else b -= .12, g -= .07; //sunset
      if (b<50) b=50, g=25;
    } //end sky

  this.sun = function() {
      //location of the sun
      if (count <= 3000) s -= .2; //sun rise
      if (count > 3000 && count <= 4000) s -= 0.2, t -= 0.3; //sun moving towards center
      if (count > 4000 && count <= 5500) s += 0.2, t -= 0.3; //sun moving towards left
      if (count > 5500 && count <= 8000) s += 0.2; //sunset

      //sun
      noStroke();
      fill(255, 245, 98); //color of the sun (MAKE THE SUN CHANGE COLORS CORRESPONDING TO TIME OF DAY)
      ellipse(t, s, 150, 150); //size of the sun
    } //end sun

  this.ground = function() {
    //ground
    fill(149, 255, 155); //color of the ground
    rect(0, 800, width, 100); //size of the ground
  }


  this.clouds = function() {
      //clouds
      if (d-200 > width) d = 0, e = random(300);
      else d += .5, e = e;
      image(cloud1, d, e);
      image(cloud2, d - 200, e + 200);
    } //end cloud
} //end sky
