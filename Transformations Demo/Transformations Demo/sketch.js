// Basic Transformations Sandbox




let originalSpacing = 20;




function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
 push(0);
 translate(220,150);

 rotate(frameCount*3);
 circle(0, 0, 150)
 let n = 4
 for(let i =0; i < n; i++){
  line(0, 0, 75, 0);
  rotate(360/n);
 }


  // //ALL TRANSFORMATIONS RESET AT draw()
  // // background(255);
  //  drawBasicGrid(200);
  // push() //COPIES ORIG COORDINATE SYSTEM
  //  translate(210, 150);
  //  drawBasicGrid(150);


  //  rectangleRed(0, 0);
  //  pop(); //BACK TO REGULAR 0,0 CORNER
  //  translate(100, 300);
  //  rectangleBlue(0,0);
  //  //BACK TO REGULAR 0,0 CORNER


  //transformation one: TRANSLATION


 


  //add push()  pop()






// background(255);
//   //transformation two: SCALE\
//   //CAN USE NEGATIVE SCALE TO FLIP
//   //COORDINATE SYSTEM
// let s = map(mouseX, 0, width, 0.1, 8,);


// translate(200, 200);
//   scale(s, 1); //0 - 1 reduction
//               // 1 no change
//               // >1 enlargement
//     drawBasicGrid(150);        
// rectangleRed(0,0)




  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
//   angleMode(DEGREES);
//   translate(300,300);
//  rotate(frameCount);
//  drawBasicGrid(150);


// face(0, 0, 500, 0);
//   //Combinations of Transformations


 


}




// function face(x, y) {
//   //draw a face at x,y
//   push();
//   translate(x,y);
//   ellipseMode(CENTER);
//   stroke(0)
//   fill("Red")
//   stroke(0)

//   pop();


// }


// function rectangleRed(x, y) {
//   //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
//   //when different basic transformations are applied.
//   noStroke();
//   fill(255, 0, 0, 150);
//   rect(x, y, 50, 50);





// function rectangleBlue(x, y) {
//   //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
//   //when different basic transformations are applied.
//   noStroke();
//   fill(0, 0, 255, 150);
//   rect(x, y, 50, 50);





// function drawBasicGrid(shade) {
//   //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
//   stroke(shade);
//   for (let x = 0; x < width; x += 20) {
//     line(x, 0, x, height);
//   }
//   for (let y = 0; y < height; y += 20) {
//     line(0, y, width, y);
//   }


  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);

