// Find the Small Circles 
// Ahnaaf Islam
// March 5, Thursday, 2026
//

let NUM_CIRCLES = 10;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function makeCircles(){
  let count = 0;
  while(count < NUM_CIRCLES){
    let x_ = random(0,width);
    let y_ = random(0,height);
    let s_ = random(10, 150);
    let c = {x:x_, y:y_, s:s_};
    circles.push(c);
    count++;
  }
}

function renderCircles(){
  let smallest = circles[0].s;
  let smallestY = circles[0].y;
  for(let c of circles){
    noFill();
    circle(c.x,c.y,c.s);
    //check is it smallest?
    if(c.s < smallest){
      smallest = c.s;
      smallestY = c.y;
    }
  }
}




function draw() {
  background(220);
  makeCircles();
  renderCircles();
}
