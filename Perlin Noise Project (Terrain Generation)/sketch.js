// Perlin Noise (Terrain Generation)
// Ahnaaf Islam
// March 4, Wednesday, 2026 
var inc = 0.01;
let start = 0.09;
let rectWidth = 15;
frameRate(0.5);

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
 // noLoop(); //can leave this for now.

}

function generateTerrain(){
  //using a loop, construct a number
  //of side by side rectangles of 
  //random height, to be 2D terrain
  for(let x = 0; x < width; x+=rectWidth){
    //generate random() (negative) height
    //eventually replace this with using noise()
    let rectHeight = random(0, height*0.15);
    rect(x,height,rectWidth,-rectHeight);
  }
}








function draw() {
  //stabilize my random values once per frame
  //this needs to get adapted for noise() once
  //we switch out of random.
  let noiseLevel = 900;
  let noiseScale = 0.01;

  // Scale the input coordinate.
  let x = frameCount;
  let nx = noiseScale * x;

  // Compute the noise value.
  let y = noiseLevel * noise(nx);

  // Draw the line.
  rect(x, y, 10, height);
}