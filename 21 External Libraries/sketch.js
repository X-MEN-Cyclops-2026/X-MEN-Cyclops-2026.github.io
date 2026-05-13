// External libraries
// Ahnaaf Islam 
// May 8, Friday, 2026
//

let gui, b;



function setup() {
  createCanvas(200, 200);
  gui = createGui();
  b = createButton("myButton", 50, 50);

}

function draw() {
  background(220);
  drawGui();
  if(b.isPressed){
    print(b.label + "is pressed.")
  }
}
