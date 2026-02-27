// Interactive Scene 
// Ahnaaf Islam
// February 11, Wednesday, 2026
//
let topcolor, bottomcolor;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function sky(){
   topcolor = color("red");   // top color is light blue
  bottomcolor = color("blue");    // bottom color is orange
  for (let y = 0; y < height; y++) { // this will allow to make 
    let n = map(y, 0, height, 0, 1);

    // lerpColor blends 2 colors to make a color in between them
    let newcolor = lerpColor(topcolor, bottomcolor, n);
    stroke(newcolor);          // new color put on brush
    line(0, y, width, y);      // draw horizontal line
  }
}

function spaceship(){ // this is a function helps to built the shapes altogether as one 
  fill("blue");
  circle(mouseX, mouseY, 50); // the mouseX and mouseY are the variables which allows the user to move the this object around
  fill("teal");
   ellipse(mouseX, mouseY, 60, 20);   // by moving their mouse.
   fill("teal");
   ellipse(mouseX, mouseY, 60, 20); //As we can see the same variables are at the shapes which allows it to move all at the same time.
   fill("black");
   ellipse(mouseX, mouseY, 30, 10);  
  
}


function pyramid(){ // this function allows the program to create the pyramids in the landscape
  noStroke(); // this variable 
  fill(181, 101, 29);
  triangle(630, 975, 458, 700, 786, 900);
  triangle(30, 975, 458, 700, 786, 900);
  triangle(100, 975, 858, 600, 786, 900);
  triangle(30, 975, 858, 600, 1286, 900);
  triangle(290, 975, 1358, 600, 1286, 1000);
  triangle(1990, 975, 1358, 600, 1286, 1000);
}

function land(){
  fill(34, 139, 34); 
  rect(0, 900, 1955, 900);
}



function moon(){
  fill("white")
  circle(1500, 150, 100);
}


function draw() { // This function allows to user's code to run 
  sky();
  moon();
  pyramid();
  land();
  spaceship();

  textAlign(RIGHT, BOTTOM);
  textSize(38);
  text("Ahnaaf", width-10, height-10); 

  // if (y > 700){
  //   blendMode(OVERLAY);
  //   noStroke();
    

  }
