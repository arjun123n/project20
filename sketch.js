var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
 weight = random(30,52);
 speed  = random(223,231);
 wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall))
  {
bullet.velocity = 0;
damage = 0.5 * speed * speed * speed/(thickness * thickness * thickness);

if(damage>10)
{
wall.shapeColor = color(255,0,0)
}
if(damage<10)
{
wall.shapeColor = color(0,255,0);
}
  }
  drawSprites();
}
function hasCollided(){
     var bulletRigthEdge = bullet.x+bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge>=bulletLeftEdge)
    {
        return true
    }
    return false;
}