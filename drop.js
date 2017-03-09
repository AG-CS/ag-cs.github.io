function Drop(x,y){
  this.x = x;
  this.y = y-35;
  this.r = 8;
  this.toDelete = false;
  ///this.triangle = triangle(this.x+25, this.y+13, this.x+15, this.y+13, this.x+20, this.y+8);


  this.show = function(){
    noStroke();
    fill('rgb(100%,0%,10%)');
    //ellipse(this.x,this.y,this.r,this.r*2);
    //triangle(this.x-5, this.y, this.x+5, this.y, this.x, this.y-5);
    triangle(this.x-25, this.y+13, this.x-15, this.y+13, this.x-20, this.y+8);
    triangle(this.x+25, this.y+13, this.x+15, this.y+13, this.x+20, this.y+8);
  }
  this.move = function(){

     this.y = this.y-2;
  }
  this.evaporate = function(){
    this.toDelete = true;


  }
  this.hits = function(flower){
     var d = dist(this.x,this.y,flower.x,flower.y);
     if(d < this.r + flower.r -10){
        return true;
     }else{
        return false;
     }

  }


}
