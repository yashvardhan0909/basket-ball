
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box2 = new Box(750,620,20,100,"red");
	box3 = new Box(545,620,20,100,"red");
	box1 = new Box(650,660,200,20,"red");

	ground=new Box(400,680, 800,10,"yellow");


	Paper= new paper(100,600,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  Paper.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:15,y:-15})
  }
}

