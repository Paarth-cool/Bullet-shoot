
var bullet
var wall1

function setup() {
  createCanvas(800,400);
  wall1 = createSprite(50, 200, 100, 100);
  bullet1 = createSprite(750,200,50,5)
  bullet1.shapeColor = "yellow"
  wall1.shapeColor = "green"
  

}
function draw() {
  background("lightblue");
  drawSprites();
  bullet1.velocityX = -7
  if (bullet1.isTouching(wall1))
  {
    bullet1.velocityX = 0
    bullet1.velocityY = 0
    wall1.shapeColor = "red"
    bullet1.shapeColor = "pink"
  }
  




}
