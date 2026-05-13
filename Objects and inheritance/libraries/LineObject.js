// Objects and inheritance 
// Ahnaaf Islam
// May 13, Wednesday, 2026
//Also - splitting our project 

//Child Class#2 - Line
class LineObject extends AnimatedObject{
    constructor(){
        super(random(width), random(height));
    }
    move(){//combo override, but build on parent
        super.move() // run parent's move()
        this.x -= 5;
        if(this.x < 0) this.x = width;

    }

    display(){ //full override (no ref to parent)
        if(mouseIsPressed){
            strokeWeight(12);
        }
        else {
            strokeWeight(2);
            line(this.x,this.y, this.x + 15, this.y);

        
    }
  }
}
