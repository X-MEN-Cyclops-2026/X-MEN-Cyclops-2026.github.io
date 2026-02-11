// Basics of Coordinate Systems 
// Ahnaaf Islam
// In Python, we wrote "run-to-completion"
//    (start at top, end at the bottom)
// 
// In p5.js, we write "interactive"
//    setup() -> runs once, at the start
//     draw() -> runs over and over (after setup)
//           targeting 60 times per second
//
// screen is updated at bottom of draw


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); //wipes the screen
  //      x  y  dia
  circle(0, 0, 50);
}
