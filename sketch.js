
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,bin1,groundObject,paperObj;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,70);
	dustbinObj=new dustbin(1000,650);
  bin1 = new dustbin(1400,650,50,213);
	paperOb = new Paper (200,300,35);
  paperOb2 = new Paper (230, 350,35);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  paperOb.display();
  paperOb2.display();
  groundObject.display();
  dustbinObj.display();
  bin1.display();

  textSize(20);
  fill("black");
  text("Press 'Down Arrow' to recycle Paper1.",50,70);
  text("Press 'Up Arrow' to recycle Paper2.",50,110);
  textSize(26);
  fill("white");
  text("Reuse",800,70);
  text("Reduce",800,110);
  text("Recycle",800,150);
  textSize(30)
  text("Save The Environment!!",700,200);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Body.applyForce(paperOb.body,paperOb.body.position,{x:350,y:-330});
  }

  if(keyCode === DOWN_ARROW){
    Body.applyForce(paperOb2.body,paperOb2.body.position,{x:150,y:-350});
  }
}


