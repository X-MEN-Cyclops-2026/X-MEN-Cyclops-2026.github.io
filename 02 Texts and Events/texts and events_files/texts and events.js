// Texts and Events
// Ahnaaf Islam
// Feb 9, Monday, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variable Section 
let textShade = 255;
let textScale = 40;
let bgcolor = "grey"
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  // this function will report some
  // system variables related to mouse
  // onto the screen via test()
  // mouseX, mouseY -> store current mouse pos
  //mouseIsPressed -> boolean: button pressed?
  //  good for mouseHELD events...
  if(mouseIsPressed){
    textScale = int(random(10, 100))
  }
  
  
  textSize(textScale);
  fill(textShade);
  text(mouseX + ", " + mouseY + ", " + mouseIsPressed
    , mouseX, mouseY, mouseX, mouseY);
}

function mouseIsPressed(){
  // this is a p5 function
  // automatically called exactly once
  // per mousePress (on down action)
  textShade = int(random(0,255));
}

function displayKeyboard(){
  // we'll use this function to inspect
  // some of p5's keyboard capabilities
  //
  // keyIsPressed -> is a keyboard button press?
  // key          _> last pressed key (non-coded)
  // keyCode      -> last pressed coded key

if (keyIsPressed){
  // something was pressed. Next, check which key/keyCode
  if(key === " "){
    bgcolor = color(random(255), random(255), random(255));
  }
}

  textSize(30);
  textAlign(CENTER, CENTER);
  let t = keyIsPressed + ", " + key + ", " + keyCode,
  text(t,width/2, height/2);

}

function draw() {
  //goal: keep draw() tidy!
  background(bgcolor);
  //displayMouse
 displayMouse() ;

}
