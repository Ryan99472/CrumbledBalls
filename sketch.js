
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,paper1,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1= new Dustbin (800,0,20,20);
	paper1= new Paper(0,700,20,20);
	ground1=new Ground(800,0,800,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 paper1.display();
 dustbin1.display();
 ground1.display();
  

 
}
function keyPressed() {
	if(keyCode === "UP_ARROW") {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85}); }
}


