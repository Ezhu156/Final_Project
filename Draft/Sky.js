function Sky() {
  //sky color
  background(0, g, b); //sky
  if (count < 10000) b += .05, g += .025; //sky
  else b -= .1, g -= .05; //sky
  //location of the sun
  if (count <= 8000) s -= .1; //sun rise
  if (count > 8000 && count <= 9500) s -= .1, t -= .2; //sun moving towards center
  if (count > 9500 && count <= 12000) s += .1, t -= .2; //sun moving towards left
  if (count > 12000 && count <= 19000) s += .1; //sunset
  //sun
  fill(255, 245, 98); //color of the sun (MAKE THE SUN CHANGE COLORS CORRESPONDING TO TIME OF DAY)
  ellipse(t, s, 150, 150); //size of the sun
  //ground
  noStroke();
  fill(149, 255, 155); //color of the ground
  rect(0, 800, width, 100); //size of the ground


  //clouds
  if (d > width) d = 0, e = random(300);
  else d += .1, e = e;
  image(cloud1, d, e);
  image(cloud2, d - 200, e + 200);
  
} //end sky