// Interactive Scene
// Ahnaaf Islam
// February 11, Wednesday, 2026


//Global Variables
let x;
let topcolor, bottomcolor;
let moonY = 150; //This variable allows to control the disappearance of the moon

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
}


function sky(){
  //this lerpColor() loop makes the gradient sky in
  //the background


   topcolor = color("purple");   // top color is light blue
  bottomcolor = color("brown");    // bottom color is orange
  for (let y = 0; y < height; y++) { // this will allow to make
    let n = map(y, 0, height, 0, 1);


    // lerpColor blends 2 colors to make a color in between them
    let newcolor = lerpColor(topcolor, bottomcolor, n);
    stroke(newcolor);          // new color put on brush
    line(0, y, width, y);      // draw horizontal line
  }
}


function spaceship(){ 
  // this is a function helps to built the shapes altogether as one
  // to make a spaceship
  fill("blue");
  circle(mouseX, mouseY, 70,); // the mouseX and mouseY are the variables which allows the user to move the this object around
  fill("teal");
   ellipse(mouseX, mouseY, 120, 20);   // by moving their mouse.
   fill("lightBlue");
   ellipse(mouseX, mouseY, 80, 10); //As we can see the same variables are at the shapes which allows it to move all at the same time.
   fill("black");
   ellipse(mouseX, mouseY, 60, 10);  
 
}


function pyramid(){ 
  // this function allows the program to create the pyramids in the landscape
  noStroke(); 
  fill(211, 78, 55);
  triangle(630, 975, 458, 700, 786, 900);
  triangle(30, 975, 458, 700, 786, 900);
  triangle(100, 975, 858, 600, 786, 900);
  triangle(30, 975, 858, 600, 1286, 900);
  triangle(290, 975, 1358, 600, 1286, 1000);
  triangle(1990, 975, 1358, 600, 1286, 1000);
}


function land(){
  //this function  is controlling the making of the ground
  fill("lightBrown");
  rect(0, 900, 1955, 900);
}


function moon(){
  fill("white")
  circle(1500, moonY, 100);
  }



function alien(){
  noStroke();
   // This function allows the alien to move from side to side

  if (keyIsDown(65)) {   // A key moves Alien to the left
    x -= 5;
  }
  if (keyIsDown(68)) {   // D key moves Alien to the right
    x += 5;
  }

  // alien body
  fill(0, 255, 0);
  ellipse(x, 900, 40, 50);

  // eyes
  fill(255);
  ellipse(x - 8, 890, 8, 12);
  ellipse(x + 8, 890, 8, 12);

  fill(0);
  ellipse(x - 8, 890, 4, 6);
  ellipse(x + 8, 890, 4, 6);
}



function draw() { // This function allows to user's code to run
  moon();
  pyramid();
  land();
  sky();
  alien();
  spaceship();


  textAlign(RIGHT, BOTTOM); // this controls the alignment of the my name in the canvas
  textSize(38); // this controls the text size of my name
  text("Ahnaaf", width-10, height-10); // this controls the padding of the text and the text itself
  

  // These if-statements allow the night and day and differences as the spaceship
  // comes  close to the ground becoming day and going up makes it night
  if( mouseY < 500){
    blendMode(MULTIPLY);
    noStroke();
    fill(0, 220, 220, 200);
    rect(0, 0, width, height);
    blendMode(BLEND);
    moonY = 150;
  }
  if(mouseY > 500){
    moonY += 650;
  }

}

