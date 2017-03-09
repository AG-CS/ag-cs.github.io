var ship;
var flowers = [];
var drops = [];

function setup() {

var cnv = createCanvas(600,400);
var x = (windowWidth + width) / 2;
var y = (windowHeight - height) / 12;
cnv.position(x, y);
ship = new Ship();//instance
//drops = new Drop(width/2,height/2);
for(var i = 0; i < 7; i++){
   flowers[i] = new Flower(i*80+80,60);
}


}

function draw() {
  background(0);
  console.log("hit");
  ship.show();

  for(var i = 0;i< drops.length;i++){
       drops[i].show();
       drops[i].move();
       for(var j = 0;j<flowers.length;j++){
         if(drops[i].hits(flowers[j])){
             flowers[j].grow();
            drops[i].evaporate();

            console.log("hit");

         }
       }


  }







   for(var i = 0;i<flowers.length;i++){
       flowers[i].show();
  }
  for(var i = 0;i< drops.length;i++){
      if(drops[i].toDelete){
         // drops[i] = '';
         drops.splice(i,1);
          //drops[i].y = 0;
      }
  }





}
//array for flowers
function keyReleased(){
    if(key != ' '){
        ship.setDir(0);
    }
}



//array for water
function keyPressed(){
   if(key === ' ')
  {
     var drop = new Drop(ship.x,height);
     drops.push(drop);
  }
  if(keyCode === RIGHT_ARROW){
    ship.setDir(5);
  }else if (keyCode === LEFT_ARROW){
    ship.setDir(-5);
  }


}
