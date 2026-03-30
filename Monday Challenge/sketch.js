// Monday Challenge 
// Ahnaaf Islam 
// March 23, Monday, 2026
//

//Global Variables
let items = [];
let currentProv = "SK";


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i > items.length; i++ ){
    items.push();
    x = random(60, width - 60);
    y = random(height);
    speedY = random(1,3);
    basePrice = random(1,100); 
    name = "Item" + i;

  }
  province.set("SK", {tax: 1.11});
  province.set("AB", {tax: 1.05});
  province.set("ON", {tax: 1.13});
}


function provinceMap(){
  let provinces = new Map();
}





function draw() {
  background(220);
  let rules = provinces.get(currentProv);
  for(let items of items){
    items.y += items.x, items.y, 60, 40 
    rect(items[])
  }
}



