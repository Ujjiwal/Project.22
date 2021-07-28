const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var bob_options={
		restitution:0.8
	}

	bobObject1 = Bodies.circle(400,200,50,30,bob_options);
	World.add(world,bobObject1);
	bobObject2 = Bodies.circle(400,200,50,30,bob_options);
	World.add(world,bobObject2);
	bobObject3 = Bodies.circle(400,200,50,30,bob_options);
	World.add(world,bobObject3);
	bobObject4 = Bodies.circle(400,200,50,30,bob_options);
	World.add(world,bobObject4);
	bobObject5 = Bodies.circle(400,200,50,30,bob_options);
	World.add(world,bobObject5);

	bobObject1 = new Bob(350,400,50);
	bobObject2 = new Bob(400,400,50);
	bobObject3 = new Bob(450,400,50);
	bobObject4 = new Bob(500,400,50);
	bobObject5 = new Bob(550,400,50);
	rope1 = new Rope(bobObject1,roof-80,0)
	rope2 = new Rope(bobObject2,roof,-60,0)
	rope3 = new Rope(bobObject3,roof,-40,0)
	rope4 = new Rope(bobObject4,roof,0,0)
	rope5 = new Rope(bobObject5,roof,-20,0)
	roof = new Roof(450,100,300,20);

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
roof.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  //create ellipse shape for multiple bobs here
ellipse(bobObject1.position.x,bobObject1.position.y,25);
ellipse(bobObject2.position.x,bobObject2.position.y,25);
ellipse(bobObject3.position.x,bobObject3.position.y,25);
ellipse(bobObject4.position.x,bobObject4.position.y,25);
ellipse(bobObject5.position.x,bobObject5.position.y,25);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bobObject1,{x:0,y:0},{x:0.05,y:0});
	}
}