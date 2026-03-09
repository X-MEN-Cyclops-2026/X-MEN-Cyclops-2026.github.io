// Nested Loops
// Ahnaaf Islam
// Date: March 6, Friday, 2026
//

// Global Variable
let bubbleSize = 30;
let bubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
}

function populateArray() {
  // Simple nested loop test to make ordered pairs

  for (let x = 0; x <= width; x += bubbleSize) {
    // x: 0, 30, 60... right edge
    for (let y = 0; y <= height; y += bubbleSize) {
      // y: 0, 30, 60
      let b = { x: x, y: y };
      bubbles.push(b);
    }
  }
}

function drawBubble() {
  // thorugh our array and display a bubble
  // at each position. Possible delete, if mouse is close
  // loop by index because we want to be able to delete
  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize);
    textAlign(CENTER,CENTER);
    text(eDist(b.x, b.y, mouseX, mouseY), b.x, b.y);
    // where in the array is b??

  }
}

function eDist(x1, y1, x2, y2) {
  // Calculate the straight-line distance

  let a = x1 - x2; let b = y1 - y2;
  let c = sqrt(pow(a,2) + pow(b,2));
  return round(c); // rounds to 1 decimal place
}

function draw() {
  background(220);
  drawBubble();
}

