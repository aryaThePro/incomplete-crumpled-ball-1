var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paper1, rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{

}

function setup() {
	var Canvas = createCanvas(1200, 700);

	keyPressed();
					
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	paper1 = new paper(50,50);
	paper1.shapeColor = "green";
	World.add(world, paper1);

	rect1 = new dustbin(50,50,40,10,20);
	World.add(world, rect1);

	rect2 = new dustbin(150,50,40,10);
	World.add(world, rect2);

	rect3 = new dustbin(70,50,10,0);
	World.add(world,rect3);	

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  packageBody.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  paper1.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}
}

