class Box {
  constructor(x,y,width,height){
   var options = {
     friction:1,
     density:0.04,
     restitution:0.8
   } 
   this.body = Bodies.rectangle(x,y,width,height,options);

   this.width = width
   this.height = height

   World.add(world,this.body);
  }
  display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x,pos.x);
    rotate(angle);
    fill("red");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
}