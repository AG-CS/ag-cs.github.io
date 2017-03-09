function Ship(){
  this.x = width/2;
  this.y =height-39;
  this.xdir=width/2;

  this.show =  function(){
    fill('#FFFFFF');
    rectMode(CENTER)
    rect(this.x,height-5,20,60);
    triangle(this.x-10, this.y+5, this.x+10, this.y+5, this.x, this.y-10);
    noStroke();
    triangle(this.x+35, this.y+25, this.x+10, this.y+25, this.x+10, this.y+15);
    triangle(this.x-35, this.y+25, this.x-10, this.y+25, this.x-10, this.y+15);
  }

  this.move = function(dir){

        this.x += dir;


  }
  this.setDir = function(dir) {
  this.x += dir;
 }



}//constructor functio
