
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball1
function preload()
{
	
	//	bging=loadImage("sprites/bg.png")
		
		

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ball1=new ball(250,600,10);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
   ball1.display();
  groundObject.display();
  dustbinObj.display();

  if(keyWentDown("UP_ARROW")){

	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:30,y:-17})
	
	
	}
}

