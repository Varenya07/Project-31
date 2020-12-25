const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight = 300;
var ground;


function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  for(var k=0; k<=width; k=k+80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for(var j = 40; j <= width; j = j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j,175))
  }

  for(var j = 40; j <= width; j = j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j,375))
  }

   ground = new Ground(width/2,height-5,width,10)
   
  


  Engine.run(engine);
}

function draw() {
  Engine.update(engine)
  
  background(0);  

  if(frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  }

  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  ground.display();

  for(var p = 0; p < particles.length; p++) {
    particles[p].display();
  }

  drawSprites();
}