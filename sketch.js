var ship;
var flowers = [];
var drops = [];

function setup() {

var cnv = createCanvas(600,400);
 var x = (windowWidth - width) / 2;
 var y = (windowHeight - height+400) / 2;
 cnv.position(x, y);
ship = new Ship();//instance
//drops = new Drop(width/2,height/2);
for(var i = 0; i < 6; i++){
   flowers[i] = new Flower(i*80+80,60);
}


}

function draw() {
  background(51);
   console.log("hit");
  ship.show();

  for(var i = 0;i< drops.length;i++){
       drops[i].show();
       drops[i].move();
       for(var j = 0;j<flowers.length;j++){
         if(drops[i].hits(flowers[j])){
            console.log("hit");
         }
       }


  }
   for(var i = 0;i<flowers.length;i++){
       flowers[i].show();
  }





}
//array for flowers
//array for water
function keyPressed(){
   if(key === ' ')
  {
     var drop = new Drop(ship.x,height);
     drops.push(drop);
  }
  if(keyCode === RIGHT_ARROW){
    ship.move(1);
  }else if (keyCode === LEFT_ARROW){
    ship.move(-1);
  }


}
