class Box 
{
  constructor(x,y,width,height)
  {
    var options = 
    {
      'restitution':0.3,
      'friction':0.6,
      'density':1.0,
     // 'isStatic':true
    }

    this.image = loadImage('water bottle.png');
    this.body = Bodies.rectangle(x,y,width/2.2,height+5,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display() 
  {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
//    stroke("black");
  //  strokeWeight(4);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}