const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left_wall;
var right_wall;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right_wall = new Ground(390,200,20,400);
  left_wall = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  ground.show();
  top_wall.show();
  left_wall.show();
  right_wall.show();
  Engine.update(engine);
}

