// Puzzle Game Assignment
// Ahnaaf Islam
// April 18, Saturday, 2026
   

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
  background(255); // also adds the abilities and special effects to the grid
  renderGrid();
  overlay();
  textSize(30);
  fill(0, 255, 255);
  if (winCondition()) {
    textSize(150);
    text("YOU WON", width / 4, height / 3);
  } //text(getCurrentX() + ", " + getCurrentY(), mouseX, mouseY);
}



//Challenges Features 
function overlay() { // This function allows to see which parts of the puzzle are going to be flipped when its is clicked
  let x = getCurrentX(); 
  let y = getCurrentY();

  fill(250, 50, 250, 120);

  if(keyIsDown(SHIFT)){ // this is code allows the user only to flip squares/tiles when the mouse is over
    rect(x * tileSize, y * tileSize, tileSize);
  }
  else{
  
  
  rect(x * tileSize, y * tileSize, tileSize);
  
  
  if(x-1 >= 0) rect((x-1) * tileSize, y * tileSize, tileSize);  // this code allows to flip the squares/tiles
    if(x+1 < cols) rect((x+1) * tileSize, y * tileSize, tileSize);  
   
     
      if(y-1 >= 0) rect(x * tileSize, (y-1) * tileSize, tileSize);
    if(y+1 < rows) rect(x * tileSize, (y+1) * tileSize, tileSize);
  
  
  }
}
  


//Basic Features 
function flip(x,y){ //this function allows the tiles/squares flip their colors (black or white) when clicked
  if(grid[y][x] === 0) grid[y][x] = 255; 
  else grid[y][x] = 0;
}

function mousePressed(){ //only does a flip if mouse is clicked on the Canvas
  if(mouseX < width && mouseY < height){
    
    let x = getCurrentX();
    let y = getCurrentY();

    rect(x * tileSize, y * tileSize, tileSize);
    if(keyIsDown(SHIFT)){  
      flip(x, y);
        }
        else{
          flip(x,y); // IF THEY EXIST
      //FLIP THE CARDINAL(NSEW) neighbours
      if(x-1 >= 0) flip(x-1, y);  //this is for the LEFT side
        if(x+1 < cols) flip(x+1, y);
     
       
        if(y-1 >= 0) flip(x, y-1);  //this is for UP
      if(y+1 < rows) flip(x, y + 1);
    }
  }
}
    

function renderGrid(){ // this explains the data stored in 2D array (grid) and draw a matrix of squares to reflect it
  for(let y = 0; y < rows; y++){ //y:0 1 2 3 4
    for(let x = 0; x < cols; x++){ //x: 0 1 2 3 4 5
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  }
}

function getCurrentX(){ //this determines the current column position of the user's mouse
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / tileSize);
}

function getCurrentY(){ //This determines the current row position of the user's mouse
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / tileSize);
}

function randomizeGrid() {  // this functions allows to randomize the grid squares 
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
  // this functions allow the user to know if they have "won" by solving the puzzle. which then checks all the tiles/squares 
  // starting at the top and the corners of all the grid.
  let wholeGrid = grid[0][0];
  for (let y = 0; y < rows; y++) { // y: 0 1 2 3 4
    for (let x = 0; x < cols; x++) { // x: 0 1 2 3 4 5
      if (grid[y][x] !== wholeGrid) {
        win = false; // this changes to when not all the tiles/squares are black or white after the click
        return win; // this return, allows us to continue making the changes necessary and when the puzzle is still not solved.
      } 

      else {
        win = true; // This changes to when every squares/tiles are black or white
      }
    }
  }
  return win; // This allows to returns the value of win, regardless of True or False
}
