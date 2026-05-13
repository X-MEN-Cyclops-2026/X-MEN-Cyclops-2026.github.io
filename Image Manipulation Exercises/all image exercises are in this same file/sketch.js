// Majority color
// Ahnaaf Islam
// May 6, Wednesday, 2026
//
let myImage;


function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);
  noLoop();
}

function draw() {
  background(220);
  image(myImage, 0, 0); //access and modify the pixels of the canvas
  loadPixels(); //this allows to dump the data from the canvas into an array
  //majorColor();
  // mirrorImage();
  // removeGreen();
  // colorPosterize();

}

function preload() { // this function is called before setup and
  // won't conclude until all loads are complete
  myImage = loadImage("assets/Optimus prime.jpg");
}

function setPixel(x,y,r,g,b){ //x,y are the pixel location and the rgb are the color values\
  let index = 4*(y*width + x);
  setPixelOneD(index, r, g, b);
}

function getAvg(x,y){ //this allows to return the average intensity of rgb at (x,y)
  let index = 4 * (y*width + x);
  let r = pixels[index];
  let g = pixels[index + 1];
  let b = pixels[index + 2];

  return (r + g + b)/3;
}


function setPixelOneD(pos, r, g, b) {
  // pos → 1D location of the pixel'red component
  // r,g,b → new color values (0-255) fpr the pixels
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
  pixels[pos + 3] = 255;

}

function majorColor(){ // This function allows it to replace the current RGB value with the great value found out of the three
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
       let index = 4 * (y * width + x); // this allows to convert the current (x,y) pixel position 
      let r = pixels[index]; //into the correct index value in the pixels array
      let g = pixels[index + 1];
      let b = pixels[index + 2];

      if (r >= g && r >= b) setPixel(x, y, 255, 0, 0); //this is the condition if red wins
      else if (g >= b) setPixel(x, y, 0, 255, 0); // this is the condition if green wins
      else setPixel(x, y, 0, 0, 255); // This allow anything which would turn to blue other than the given conditions 
    }                        
  }
  updatePixels();
}


function removeGreen() {//This function allows to remove the Green Color value from half of the image vertically
  for (let x = width / 2; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = 4 * (y * width + x); // this converts the current value of (x,y) pixel position into
      //the correct index value in the pixels array. 

      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];

      setPixel(x, y, r, 0, b); // This removes the green value of the image but keeps the other values.
    }
  }
  updatePixels();
}

function colorPosterize() { // This function will be looking at each pixel of the image and 
  // allowing it to overwrite those pixels with the five possible set of colors.
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      let avg = getAvg(x, y);
      if (avg >= 205) setPixel(x, y, 170, 230, 220);
      else if (avg >= 155) setPixel(x, y, 105, 150, 210);
      else if (avg >= 105) setPixel(x, y, 120, 180, 60);
      else if (avg >= 55) setPixel(x, y, 130, 30, 130);
      else setPixel(x, y, 90, 10, 50);
    }
  }
  updatePixels();
}

function mirrorImage() { // This function allows to copy the pixels of the image from the right side and paste on the left side
  for(let x = width/2; x < width; x++){
    for(let y = 0; y < height; y++){

      let index = 4 * (y * width + x);
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];

      // finds mirrored x location
      let mirrorX = width - x - 1;

      setPixel(mirrorX, y, r, g, b);
    }
  }
  updatePixels();
}