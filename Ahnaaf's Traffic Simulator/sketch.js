// Traffic Simulator
// Ahnaaf Islam
// March 27, Friday, 2026

//Global Variables
let eastbound = [];// cars and trucks moving in east (right)
let westbound = [];// cars and trucks moving in west (left)
let light; // this is a variable for the traffic light


function setup() {
  createCanvas(windowWidth, windowHeight);
  light = new TrafficLight(); // sets up the traffic light

  for (let i = 0; i < 20; i++) { // creating 20 vehicles for going both right and left sides of the road.
    eastbound.push(new Vehicle(random(width), random(height / 2 + 40, height / 2 + 120), 1));
    westbound.push(new Vehicle(random(width), random(height / 2 - 120, height / 2 + 120), 0));
  }
}


function draw() {
  background(220);
  makeRoad();// this draws the road

  light.update(); // Update the traffic light and display it
  light.display();

  for (let east of eastbound) { // runs the cars on the eastbound side of the road
    east.action()
  }
  for (let west of westbound) { // runs the cars that are on the westbound side of the road
    west.action();
  }

}

function makeRoad() { // This function makes a road for the canvas and also draws the lane divider lines
  fill(60);
  rect(0, height / 2 - 150, width, 300);

  stroke(255)
  strokeWeight(4);
  for (let x = 0; x < width; x += 40) { // draws the centred dash line of the road
    line(x, height / 2, x + 20, height / 2);

  }
}

// Main Functions and Classes of the program

class Vehicle { // this function allows to spawn cars in the road
  constructor(x, y, direction) {
    this.x = x; // Position of the vehicle
    this.y = y;
    this.direction = direction;

    this.type = int(random(2)); // 0 = cars, 1 = truck //
    this.color = color(random(255), 55, random(255)); // this allows to change colors the of the car to random colors

    if (direction === 1) { //Set speed depending on direction
      this.xSpeed = random(2, 5);
    } else {
      this.xSpeed = random(-5, -2);
    }
  }

  display() { // draws the vehicles on its type 
    push();
    translate(this.x, this.y);


    rectMode(CENTER);
    noStroke();

    // Vehicle: CAR //
    if (this.type === 0) {
      fill(this.color);

      //body of the car
      rect(0, 0, 45, 14, 6);
      triangle(22, -7, 30, 0, 22, 7);

      // windshield
      fill(200, 230, 255);
      rect(8, 0, 14, 8, 3);

      //racing stripe
      fill(255);
      rect(0, 0, 20, 2);

      // wheels 
      fill(0);
      ellipse(-15, -8, 5);
      ellipse(15, -8, 5);
      ellipse(-15, 8, 5);
      ellipse(15, 8, 5);

      // headlights
      fill(255, 255, 150);
      ellipse(28, -3, 3);
      ellipse(28, 3, 3);
    }

    //Vehicle: TRUCK//
    else {
      // body
      fill(this.color);
      rect(-5, 0, 50, 20, 3);

      // front cabin
      fill(180);
      rect(20, 0, 20, 16, 3);

      // wheels
      fill(0);
      ellipse(-15, -10, 6);
      ellipse(5, -10, 6);
      ellipse(20, -10, 6);

      ellipse(-15, 10, 6);
      ellipse(5, 10, 6);
      ellipse(20, 10, 6);
    }

    pop();
  }
  move() { // Moves the vehicle and prevents collsions 
    if (light.isRed) {
      return; // this code allows to stop 
    }

    this.x += this.xSpeed;

    // Keep the cars in its lane
    if (this.direction === 1) {
      // eastbound (bottom lane)
      this.y = constrain(this.y, height / 2 + 40, height / 2 + 120);
    } else {
      // westbound (top lane)
      this.y = constrain(this.y, height / 2 - 120, height / 2 - 40);
    }

    // wrap around
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
  }

  speedUp() { // Increases vehicle's speed up to max
    if (this.direction === 1) {
      if (this.xSpeed < 7) {
        this.xSpeed += 1;
      }
    } else {
      if (this.xSpeed > -7) {
        this.xSpeed -= 1;
      }
    }
  }

  speedDown() { // decrease vehicle' speed but it does not let the vehicle go reverse
    if (this.direction === 1) {
      if (this.xSpeed > 3) {
        this.xSpeed -= 0.5;
      }
    } else {
      if (this.xSpeed < -3) {
        this.xSpeed += 0.5;
      } 
    }
  }


  changeColor() { //Changes the vehicle's color randomly
    this.color = color(random(255), 155, random(255));
  }

  action() {// Main function that conrtols vehcile behaviour each frame
            //Calls movement liek random speed changes, and rendering
    this.move(); 

    if (random(100) < 1) {
      this.speedUp();
    }

    if (random(100) < 1) {
      this.speedDown();
    }

    if (random(100) < 1) {
      this.changeColor();
    }
    this.display();
  }
}

// Traffic Signal Light //
class TrafficLight { // controls  when vehicles stop and go
  constructor() { // activates the traffic light (which starts green)
    this.isRed = false; //this sets up the red light or green light boolean
    this.timer = 0;
  }

  update() { // This updtaes the timer and swicthes back to green light when the time is up
    if (this.isRed) {
      this.timer--;

      if (this.timer <= 0) {
        this.isRed = false;
      }
    }
  }

  display() { // This draws the traffic light red or green
    fill(50);
    rect(50, 50, 40, 80);

    if (this.isRed) {
      fill("red");
    } else {
      fill("green");
    }

    ellipse(70, 90, 25);
  }

  turnRed() { // Turns the light red for a set of time duration
    this.isRed = true;
    this.timer = 120;
  }
}

//Now for the interaction part of the program///
function mousePressed() { // adds new vehicles when the mouse and the shift key is clicked
  if (keyIsDown(SHIFT)) {
    westbound.push(new Vehicle(mouseX, random(height / 2 - 120, height / 2 - 40), 0));
  } else {
    eastbound.push(new Vehicle(mouseX, random(height / 2 + 40, height / 2 + 120), 1));
  }
}

function keyPressed() { // turns the traffic light red when the spacebar is pressed to stop the vehicles moving
  if (key === ' ') {
    light.turnRed();
  }
}
