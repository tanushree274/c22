const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ball;

var ground;

function setup() {
  createCanvas(400,400);
//  createSprite(400, 200, 50, 50);

engine=Engine.create();


world=engine.world;

var ground_options={

  isStatic:true
}

var ball_options={
  restitution:1
}


ball=Bodies.circle(45,146,20,ball_options);
World.add(world,ball);

ground=Bodies.rectangle(200,380,400,10,ground_options);
World.add(world,ground);

}

function draw() {
  background(255,255,255); 
Engine.update(engine);
rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,10);
  circle(ball.position.x,ball.position.y,20);

rect(200,200,50,50);
  drawSprites();
}