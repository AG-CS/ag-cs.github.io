function Flower(x,y){
  this.x = x;
  this.y = y;
  this.r = 30;
  this.show = function(){
    fill('#DC3D24');
    ellipse(this.x,this.y,this.r+20,this.r+20);

  }
  this.grow = function(){
      this.r = this.r-50;
  }


}
