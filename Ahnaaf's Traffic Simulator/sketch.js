// Traffic Simulator
// Ahnaaf Islam,
// March 27, Friday, 2026

//Global Variables
let eastbound = [];
let westbound = [];
let lights;


function setup() {
  createCanvas(windowWidth, windowHeight);
  lights = new TrafficLight(); // sets up the traffic lights

  for (let i = 0; i < 20; i++){
    eastbound.push(new Vehichle(random(width), random(height/2 + 40, height/2 + 120), 1));
    westbound.push(new Vehichle(random(width), random(height/2 - 120, height/2 + 120), 1));
  }
}

function draw() {
  background(220);
  drawRoad();

  light.update();
  light.display();

  for (let v of eastbound) v.action();
  for (let v of westBound) v.action();
}

function makeRoad(){
  fill(60);
  rect(0, height/2 - 150, width, 300);

  stroke(255)
  strokeWeight(4);
  for (let x = 0; x < width; x += 40){
    line(x, height/2, x + 20, height/2);
  
  }
}

// Vehicle calls starts here

class Vehicle { // this function allows to spawn cars in the road
  constructor(x, y, direction){
    this.x = x;
    this.y = y;
    this.direction = direction;

    this.type = int(random(2)); // 0 = cars, 1 = truck //
    this.color = color(random(255), 55, random(255)); // this allows to change colors the of the car

    this.xSpeed = (direction === 1) ? random(2,5) : random(-5,-2);
}

  display(){
    push();
    translate(this.x, this.y);
    if(this.direction === 0) scale(-1,1);

    rectMode(CENTER);
    noStroke();

  // Vehicle: CAR //
  if(this.type === 0){
    fill(this.color);
    rect(0, 0, 50, 25, 5);

    fill(200);
    rect(10, -5, 15, 10);

    fill(0);
    ellipse(-15, 12, 10);
    ellipse(15, 12, 10);
}

  // Vehicle: Truck //
  else{
    fill(this.color);
    rect(-10, 0, 60, 30);

    fill(100);
    rect(25, 0, 60, 30);

    fill(0);
    ellipse(-20, 15, 12);
    ellipse(10, 15,12);
    ellipse(35, 15, 12);
  }

  pop();
 }
move(){
  if(lights.isRed) return;

  this.x += this.xSpeed;

  // wrap around
  if (this.x > width) this.x = 0
  if (this.x < 0) this.x = width;
 }

speedUp() {
  if (this.direction === 1 && this.xSpeed < 15) this.xSpeed += 0.5;
  if (this.direction === 0 && this.xSpeed > -15) this.xSpeed -= 0.5;
 }

speedDown() {
  if (this.direction === 1 && this.xSpeed < 0) this.xSpeed -= 0.5;
  if (this.direction === 0 && this.xSpeed > 0) this.xSpeed += 0.5;
 }

changeColor(){
  this.color = color(random(255), 155, random(255));
 }

action(){
  this.move();

  if(random(100) < 1) this.speedUp();
  if(random(100) < 1) this.speedDown();
  if(random(100) < 1) this.changeColor();
  
  this.display();
 }
}

// Traffic Signal Light //
class TrafficLight {
  constructor() {
    this.isRed = false;
    this.timer = 0;
  }

  update(){
    if(this.isRed) {
      this.timer--;
      if(this.timer <= 0) this.isRed = false
    }
  }

  display(){
    fill(50);
    rect(50, 50, 40, 80);

  }
}