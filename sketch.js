
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,dustbin,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1100,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(500,550,1000,20)
    ball = new Ball(50,520+20,30)
    dustbin = new Dustbin(800,520+20,200,15)
    dustbin2 = new Dustbin(700,478+20,15,100)
    dustbin3 = new Dustbin(900,478+20,15,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');
  Engine.update(engine)
  ground.display();
  ball.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 keypressed();
}

function keypressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50})
  }
}

