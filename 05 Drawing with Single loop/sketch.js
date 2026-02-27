// Drawing with Single Loops
// Ahnaaf Islam
// Feb 24, 2026
//

//Global variables 
let cX = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function movingBall(){
  //Using Draw() Loop, we can animate
  cX += 5;
  if(cX > width) cX = 0;//Wrap Around
  circle(cX, 50, 25);

}


function circleline(y, size){
  // use tis function to draw a line of circles
  // y -> number  height at which to draw the line
  // size -> number diameter of the circles 
  let xStart = width * 0.1; //10% position from left
  let xEnd  = width * 0.9; //90% position from left

  for(let x = xStart; x < xEnd; x += size){
    circle(x,y,size);
  }
}


function gradientBackground(){
  //create a gradient to use as a background
  let h = 2;// the height of the rectangle

  //use a loop(does not have to be a white)
  //To draw vertical stack of rects


let y = 1
while(y < height){
let value = map(y, 0, height, 0, 255);
fill(value, 
  rect(0,y,width,h);
  y += h;
}

}



}

function draw() {
  background(220);
  gradientBackground();
  movingBall();
  circleline(height*0.35, 30);
  circleline(height/2, 50);
  circleline(height*0.65, 80);
  
}
