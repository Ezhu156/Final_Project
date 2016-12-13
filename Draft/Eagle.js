function Eagle() {
  this.show = function() {
    if (count < 263) image(hatched, 537, 778); //image of the chick before eagle
    if (count >= 263 && count < 550) animation(swoop, ex_count, ey_count); //image of chick and eagle flying away
    //eagle animation
    if (count < 263) animation(eagle, ex_count, ey_count); //eagle flying in
    if (ex_count < 640) ex_count += 3.3, ey_count += 2.2; //x and y speed of the eagle flying in
    if (count >= 300 && count < 550) ex_count += 3.3, ey_count -= 2.2;//x and y speed of the eagle flying away
    if (count > 570) { //change of settings where eagle flies in and drops the chick
      fill(149, 255, 155); //color of the ground
      rect(0, 800, width, 100); //ground
      image(arrow, 850, 720); //right wooden arrow
      image(left_arrow, 50, 720); //left wooden arrow 
      n = a; //sets the value of n so the chick can change locations
      if (count < 765) animation(swoop, ex, 250); //image of the chick and eagle flying in new location
      else animation(eagle, ex, 250) //image of eagle flying away after dropping chick
      if (count < 1000) ex += 3.3; //speed of the eagle flying in new location
    } //end new location
    //if (ex == 500) console.log(count);
    if (count > 765) bird.show(), bird.update(); //chick dropping from the sky
  } //end show
} //end function