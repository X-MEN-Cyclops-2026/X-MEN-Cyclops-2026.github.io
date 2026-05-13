// Objects and inheritance 
// Ahnaaf Islam
// May 13, Wednesday, 2026
//Also - splitting our project 


//this is the parent class known as the Super class
// --- if all classes in one file, this
// should occur first --
class AnimatedObject{
  //constructor
  constructor(x,y){
    this.x = x; this.y = y;
    this.size = 16;
  }

  //class methods
  move(){ //add a wiggle effect
    this.x += random (-2,2);
    this.y += random (-2,2);
  }

  display(){
    strokeWeight(this.size);
    point(this.x, this.y);
  }
}
