var path,pathImg;
var runner,runnerAni;
var leftBound,rightBound;


function preload(){
  //pre-load images
 pathImg=loadImage("path.png");
 runnerAni=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path=createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY=4;

 runner=createSprite(200,300,20,20);
 runner.addAnimation("running" ,runnerAni);
 runner.scale=0.09;

 leftBound=createSprite(30,200,80,400);
 rightBound=createSprite(370,200,80,400);
 leftBound.visible=false;
 rightBound.visible=false;
}

function draw() {
  background(0);
  drawSprites();
  createEdgeSprites();
 

  if (path.y > 400) {
    path.y=height/2;
  }
  runner.x=mouseX;
  runner.collide(rightBound);
  runner.collide(leftBound);
}
