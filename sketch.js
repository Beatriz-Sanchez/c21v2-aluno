const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var solo;
var parede_esq;
var parede_dir;
var parede_cima;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  solo =new Solo(200,390,400,20);
  parede_dir = new Solo(390,200,20,400);
  parede_esq = new Solo(10,200,20,400);
  parede_cima = new Solo(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  solo.mostrar();
  parede_cima.mostrar();
  parede_esq.mostrar();
  parede_dir.mostrar();
  Engine.update(engine);
}

