
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

bobDiameter = 200;

function preload()
{
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(width/2, 150, width * (1/2), 50);
	ground1 = new Roof(width/2, height, width, 10);

	bob1 = new Bob( 450, 500, bobDiameter);
	bob2 = new Bob( 550, 500, bobDiameter);
	bob3 = new Bob( 650, 500, bobDiameter);
	bob4 = new Bob( 750, 500, bobDiameter);
	bob5 = new Bob( 850, 500, bobDiameter);
	bob6 = new Bob( 950, 500, bobDiameter);

	rope1 = new Rope(bob1.body, roof1.body, bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof1.body, bobDiameter*2, 0);
	rope3 = new Rope(bob3.body, roof1.body, bobDiameter*2, 0);
	rope4 = new Rope(bob4.body, roof1.body, bobDiameter*2, 0);
	rope5 = new Rope(bob5.body, roof1.body, bobDiameter*2, 0);
	rope6 = new Rope(bob6.body, roof1.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();
  ground1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  //drawSprites();
 
}



