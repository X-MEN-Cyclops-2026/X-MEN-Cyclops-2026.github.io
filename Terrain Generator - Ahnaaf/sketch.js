// Perlin Noise (Terrain Generator)
// Ahnaaf Islam
// March 6, Wednesday, 2026
// CS30


/// Global Variables
let rectWidth = 8; // this is the width of the rectangle
let noiseOffset = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function generateTerrain(){ //-> This functions allows to generate random height of rectangle
  fill(0);
  let xOffset = noiseOffset;
  let highestPeak = height; 
  let peakX = 0; // find the peak point of the terrain
  let peakY = 0; // same goes for this as well
  let totalHeight = 0;
  let count = 0

  //using a loop, construct a number 
  //of side by side rectangles of 
  //random height, to be 2D terrain
  for(let x = 0; x < width; x += rectWidth){ // this creates a loop across the screen drawing rectangles
    //generate random() (negative) height
    //eventually replace this with using noise()
    let rectHeight = noise(xOffset) * height * 0.95;
    rect(x,height,rectWidth,-rectHeight);

    let topY = height - rectHeight;
    
  //check if this is the highest peak
  if(topY < highestPeak){ // This code allows the flag to locate the highest peak of the terrain
    highestPeak = topY;
    peakX = x + rectWidth/2;
    peakY = topY;
  }

  totalHeight += rectHeight;
  count++;
  xOffset += 0.02; //small change between rectangles
}

let avgHeight = totalHeight / count; // this code allows to locate the average height of each terrain
fill(200, 10, 255);
rect(0, height - avgHeight, width, 5); // this shape locates the average height of the terrain

// Summit the flag
drawFlag(peakX,peakY);
}


function keyPressed(){ //-> this function allows the user to modify the width of rectangles 
  if(keyCode === LEFT_ARROW){ // <- Left arrow is for decreasing the width of the rectangle.
    rectWidth = max(1, rectWidth - 1);
  }

  if(keyCode === RIGHT_ARROW){//<_ Right arrow is for increasing the width of the rectangle
    rectWidth += 1;
  }
}


function drawFlag(x, y){ // This function is made for finding the higest peak of the terrain.
  stroke("red");
  strokeWeight(5);
  line(x, y, x, y - 40);
  noStroke();
  fill("red");
  triangle(x, y - 40, x + 20, y - 30, x, y - 20);
}


function draw() {
  //stablize my random values once per frame
  //this needs to get adapted for noise() once
  //we switch out of  random
  //randomSeed(25);

  background(255);
  generateTerrain();

  // terrain panning
  noiseOffset += 0.01;
}


































