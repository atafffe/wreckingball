class Ball {
  constructor(x,y,r){
  var options = {
      density:1,
      frictionAir: 0.005
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = 40;

    World.add(world,this.body);
  }
  display(){
    var position = this.body.position
    var angle = this.body.angle

    push();
    translate(position.x,position.y);
    rotate(angle);
    fill("red");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r);
    pop();
  }
}