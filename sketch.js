const World = Matter.World
const Bodies =Matter.Bodies
const Engine = Matter.Engine

var engine, world
var ball, ball2, ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution : 1
  }
  var ball2options = {
    restitution : 1
  }
 ball = Bodies.circle(100,100, 20, options);
 World.add(world,ball);

 ball2 = Bodies.circle(175,100,10, ball2options); 
World.add(world,ball2);

 var ground_options = {
   isStatic : true
 }
ground = Bodies.rectangle(200,200,800,15, ground_options)
World.add(world,ground)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine);

 rectMode(CENTER)
 rect(ground.position.x,ground.position.y, 800,15);
ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 20 ,20 );
  ellipse(ball2.position.x,ball2.position.y, 10 ,10 );
}