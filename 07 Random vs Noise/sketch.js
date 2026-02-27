// Project Title
// Your Name
// Date
//
// Looking at unprediactbility 
// Specifically the difference between
// Uniformly distributed numbers
// And Perlin Noise
//
// Challenge: use noise() to make/use a 
// 

//Global Variables
let d1, d2;
let minSize = 5; let maxSize = 200;
let x1, x2, y1, y2;

//variables for using noise()
let noiseTime = 5, noiseSpeed = 0.015;
//"noiseSpeed" controls how connected 
//the random noise()

let ySpeed = 8; //range: -5 and +5
let yNoiseTime = 10, yNoiseSpeed = 0.1;


 
function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3; y1 = height*0.5;
  x2 = width*0.7; y2 = height*0.5;
  // frameRate(3);
}

function draw() {
   background(0)
   ySpeed = noise 
  // randomSeed(703); // actual value
  // stars();
  randomCircle();
  noiseCircle();
} 


function noiseCircle(){
  //draw a fixed circle 
  //Changing (but smoother!) diameter
  fill(200,150,50);
  d2 = noise(noiseTime); 
  d2 = map(d2, 0, 1, minSize, maxSize);
  circle(x2, y2, d2)
noiseTime += noiseSpeed
}





function randomCircle(){
  // draw a fixed circle with random()ly
  // Changing diameter
  fill(120,25,60);
  d1 = random(minSize, maxSize);
  circle(x1, y1, d1);
}







function stars(){
  /// use random() to generate 100 stars
  fill(255);
  for(let i = 0; i < 100; i++){
    let x = random(0,width);
    let y = random(0,height)
    circle(x,y,3);
  }




  
}
