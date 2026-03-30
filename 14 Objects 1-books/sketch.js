// Project Title
// Your Name
// Date
//


//Global Variables
let myBook;



function setup() {
  createCanvas(windowWidth, windowHeight);
  //create a single book
  myBook = new Book("CS30 TexT", "Mr.Scott",
    1234567891011, "leatherbound", 500, width * 0.3)
}

function draw() {
  background(220);
}

class Book{
  //1. Constructor 
  constructor(title,author,isbn,cover,pages,x){
    this.title = title
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  //2. Class Methods
  //Since we are in class, we omit
  //Function Keyword
  display(){
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(30);

    //set fill color based on covertype
    switch(this.cover){
      case "softcover";
      fill("green"); break;
      case "hardcover";
      fill("blue"); break;
      case "leatherbound";
      fill("red"); break;
    }

    //Now draw book
    push();
    translate(this.x, height/2);
    rect(this.x, height/2, this.pages/10, 500);
    fill("black");
    text(this.title[0], 0, -50);
    pop();








  }

}

































