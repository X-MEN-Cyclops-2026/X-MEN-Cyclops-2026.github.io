// Puzzle Game Assignment
// Ahnaaf Islam
// April 18, Saturday, 2026
//       

let grid = [ // This is an array for the grid
  [0,   0,   0,   255,  0,  255],
  [255, 0, 255,   0,    255,  0],
  [0,   0,   0,   0,    0,  255],
  [255, 255, 255, 255,  255,  0],
  [0,   255, 0,   0,    0,  255]
];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 250;
let win = false;

function setup() {
  createCanvas(windowWidth, windowWidth);
  randomizeGrid();
}

function draw() { // this functions renders the whole grid, and draws the background,
  background(255); // also adds th     e abilities and special effects to the grid
  renderGrid();
  blendMode(ADD);
  canvasEffects();
  blendMode(BLEND)
  overlay();
  textSize(30);
  fill(0, 255, 255);
  if (winCondition()) {
    textSize(150);
    text("YOU WON", width / 4, height / 3);
  }
  //text(getCurrentX() + ", " + getCurrentY(), mouseX, mouseY);
}



//Challenges Features 
function canvasEffects() { // this is a function that provides a special effect
  noStroke();  // on the looks of the entire puzzle
  for (let y = 0; y < height; y++) {
    let mapping = map(y, 0, height, 0, 1);
    let c = lerpColor(
      color(20, 0, 40),   // dark purple
      color(255, 0, 120), // neon pink
      mapping
    );
    stroke(c);
    line(0, y, width, y);
  }
}

function overlay() { // This function allows to see which parts of
  let x = getCurrentX(); // the puzzle are going to be flipped when its is clicked
  let y = getCurrentY();

  fill(20, 150, 255, 120);

  // Always draw center
  rect(x * tileSize, y * tileSize, tileSize);

  // If the shift key is NOT pressed, draw neighbors
  if (!keyIsDown(SHIFT)) {
    let directions = [
      [-1, 0], [1, 0], // left, right
      [0, -1], [0, 1]  // up, down
    ];

    for (let [dx, dy] of directions) {
      let newX = x + dx;
      let newY = y + dy;

      if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
        rect(newX * tileSize, newY * tileSize, tileSize);
      }
    }
  }
}



//Basic Features 
function flip(x,y){
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function mousePressed(){
  //only do a flip if mouse is on the Canvas
  if(mouseX < width && mouseY < height){
    
    let x = getCurrentX();
    let y = getCurrentY();

    // ALWAYS:
    flip(x, y);

    // IF THEY EXIST:
    // flip the cardinal (NSEW) neighbours
    if(x-1 >= 0) flip(x-1, y);
    if(y-1 >= 0) flip(x, y-1);
  }
  
}

function renderGrid(){
  // intepret the data stored in 2D array (grid) and
  // draw a matrix of squares to reflect it
  for(let y = 0; y < rows; y++){ //y:0 1 2 3 4
    for(let x = 0; x < cols; x++){ //x: 0 1 2 3 4 5
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  }
}

function getCurrentX(){
  //determine the current col position of mouse
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / tileSize);
}

function getCurrentY(){
  //determine the current row position of mouse
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / tileSize);
}

function randomizeGrid() {  // this functions allow to randomize the grid squares 
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid[y][x] = random([0, 255]); // this helps to pick black or white randomly
    }
  }
  // this code forces at least one square to be different
  grid[0][0] = 0;
  grid[0][1] = 255;
}

function winCondition() {
  // this functions alllow the user to know if they have "won" by solving
  // the puzzle. And it checks all the tiles starting at the top and the corners of all the grid.
  let wholeGrid = grid[0][0];
  for (let y = 0; y < rows; y++) { // y: 0 1 2 3 4
    for (let x = 0; x < cols; x++) { // x: 0 1 2 3 4 5
      if (grid[y][x] !== wholeGrid) {
        win = false; // changes to when not all the tiles are black or white
        return win; // this return allows us to continue making the changes
      } // necessary when the puzzle is still not solved
      else {
        win = true; // This changes to when all the squares/tiles are black or white
      }
    }
  }
  return win; // This allows to returns the value of win, regardless of True or False
}
