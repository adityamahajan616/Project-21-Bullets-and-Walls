
var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0); 

  drawSprites();

  //collision detection
  if (wall.x-bullet.x <= (bullet.width+wall.width)/2) {
    
    //damage calculation
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage <= 10) {
      wall.shapeColor = color("green"); 
    }

    else if(damage >= 10) {
      wall.shapeColor = color("red"); 
    }

    bullet.velocityX = 0;

  }

}