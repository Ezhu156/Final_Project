//HOW TO MODIFY THIS FUNCTION SO THAT IT ONLY ALLOWS ONE JUMP
//Shiffman https://www.youtube.com/watch?v=cXgA1d_E-jY
function Bird() {
  this.y = c;

  this.gravity = 0.5;
  this.lift = -15; 
  this.velocity = 0;

  this.show = function() {
    image(hatched, n, this.y);
  }


  this.up = function() {
    this.velocity += this.lift
    this.velocity *= 0.9;
    this.velocity += this.gravity * 10;

  }
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;


    if (this.y > c) {
      this.y = c;
      this.velocity = 0;
    }//end if
  }//end update
}//end function