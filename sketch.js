
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dog;
var database;
var food;
var foodStock;
// function preload()
// {

// }

function setup() {

  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  // database = firebase.database();
  database = firebase.database();

  dog = new Dog(windowWidth / 2, windowHeight / 2);
  Engine.run(engine);


  foodStock = database.ref("stock/food");
  foodStock.on("value", readData);

}


function draw() {
  resizeCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
  background(46, 148, 87);

  dog.keyPressed();


  dog.display();

  text("Food left " + foodStock, windowHeight / 4, 150)

}

function move(xoff, yoff) {
  dog.body.position.x = dog.body.position.x + xoff;
  dog.body.position.y = dog.body.position.y + yoff;

}

function writeData(x) {

  if (x >= 0) {
    food = 0;
  } else {
    food = food - 1;
  }

  database.ref("stock/food").update({ food: x });


}

function readData(data) {
  food = data.val();
}

