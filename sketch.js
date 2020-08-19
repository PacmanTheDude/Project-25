var c_ball;
var b1, b2, b3;
var ground;
var c_img, b_img;
var bin;

function preload() {
	c_img = loadImage("25 imgs/curmpled ball.jpg");
	b_img = loadImage("25 imgs/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	c_ball = createSprite(100,630,30,30);
	c_ball.addImage("ball",c_img);
	c_ball.scale = 0.1;
	ground = createSprite(400,650,900,10);
	ground.shapeColor = "yellow";
	b1 = createSprite(665,640,120,10);
	bin = createSprite(670,570,20,20);
	bin.addImage("b_in", b_img);
	bin.scale = 0.4;
	b1.shapeColor = "white";
	b2 = createSprite(730,575,10,140);
	b2.shapeColor = "white";
	b3 = createSprite(610,570,10,140);
	b3.shapeColor = "white";
}


function draw() {
  background("white");
  c_ball.bounceOff(b2);
  c_ball.bounceOff(b3);
  c_ball.bounceOff(ground);
  
  if(keyDown(UP_ARROW)) {
	  c_ball.velocityY = -3;
  }

  if(keyDown(RIGHT_ARROW)) {
	  c_ball.velocityX = 3;
	  c_ball.velocityY = 1;
  }

  if(keyDown(DOWN_ARROW)) {
	  c_ball.velocityY = 3;
  }

  if(c_ball.isTouching(b1)) {
	  c_ball.velocityX = 0;
	  c_ball.velocityY = 0;
  }
  
  drawSprites();
 
}



