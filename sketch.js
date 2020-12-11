var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);

  monkey = createSprite(40, 30);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.18;


  monkey.setCollider("rectangle", 0, 0, 60, 600)

  ground = createSprite(300, 395, 600, 30);
  ground.x = ground.width / 2;

  obstacleGroup = new Group();
  foodGroup = new Group();


}


function draw() {
  background(rgb(88, 208, 59));
  monkey.collide(ground);

  if (keyDown("space") && monkey.y > 310) {
    monkey.velocityY = -17;
  }


  monkey.velocityY = monkey.velocityY + 0.8;

  if (obstacleGroup.isTouching(monkey)) {
    monkey.destroy();
  }
fill("black");
textSize(20);
score = Math.ceil(frameCount/frameRate());
  text("Survilval Time: "+score,250,50);

  spawnBananas();
  spawnObstacles();

  drawSprites();
}

function spawnBananas() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(30, 250));
    banana.addImage("banana", bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -3;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle;
    obstacle = createSprite(610, 360);
    obstacle.velocityX = -4;
    obstacle.lifetime = 300;
    obstacle.addImage("rock", obstacleImage);
    obstacle.scale = 0.15;
    obstacleGroup.add(obstacle);



  }
}