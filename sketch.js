const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
var g_option={
  isStatic:true
}
  ground=Bodies.rectangle(400,390,800,20,g_option);
 World.add(world,ground);

 var b_option={
   restitution:1.0
 }
ball=Bodies.circle(100,100,30,b_option);
World.add(world,ball)
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  rectMode(CENTER);
  fill("#654321");
  rect(ground.position.x, ground.position.y, 800, 20);

  fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30);
}