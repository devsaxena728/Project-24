
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = Matter.Bodies.circle(100, 100, 20);
	World.add(world,ball)

	rectangle=Matter.Bodies.rectangle(400, 650, 800, 100,{ isStatic: true})
	World.add(world,rectangle)

	rectangle1=Matter.Bodies.rectangle(650, 550, 10, 100,{ isStatic: true})
	World.add(world,rectangle1)
	
	rectangle2=Matter.Bodies.rectangle(750, 550, 10, 100,{ isStatic: true})
	World.add(world,rectangle2)


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(rectangle.position.x,rectangle.position.y,800, 100);
  rect(rectangle1.position.x,rectangle1.position.y,10, 100);
  rect(rectangle2.position.x,rectangle2.position.y,10, 100);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{ x: 0.05, y: -0.05});
	}
}
