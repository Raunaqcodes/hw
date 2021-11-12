var car1, car1image
var car2, car2image
var highway, highwayImage
var obstacle1, obstacle1Image;

function preload(){
car1image = loadImage("White-modern-car-on-transparent-background-PNG.png")
//car2image = loadImage("Green-modern-car-on-transparent-background-PNG.png")
highwayImage = loadImage("highway3.jpg")
obstacleImage = loadImage("bananapeel.png")

}

function setup() {
 createCanvas(800,400);
 var message = "This is a message";
 console.log(message)
 highway = createSprite(100,10,400,20);
 highway.addImage("highway",highwayImage);
 highway.x = highway.width /2;

 car1 = createSprite(60,250)
 car1.addImage(car1image)
car1.scale= 0.02;

obstacle1 = createSprite(400,250)
obstacle1.addImage(obstacleImage)
obstacle1.scale = 0.1;
 


// gameOver = createSprite(300,100);
 //gameOver.addImage(gameOverImg);

 //restart = createSprite(300,140);
 //restart.addImage(restartImg);
 
 //gameOver.scale = 0.5;
  //restart.scale = 0.5; 

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;



}


function draw() {
background("black");
drawSprites()
highway.velocityX = -4
if(highway.x <0) {
  highway.x = highway.width/2;

}
if(keyDown("down")){
car1.y = 350;

}
if(keyDown("up")){
  car1.y = 250;
}
 
}